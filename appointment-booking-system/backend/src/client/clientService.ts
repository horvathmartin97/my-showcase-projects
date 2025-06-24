import { Appointment, Provider } from "@prisma/client";
import prisma from "../utils/prisma";
import { User } from "@prisma/client";
import HttpError from "../utils/HttpError";

const clientService = {
  getAllProvDates: async (): Promise<Provider[]> => {
    const allProviders = await prisma.provider.findMany({
      select: {
        appointments: true,
        dayOffs: true,
        services: true,
        WeeklyDayOff: true,
        workHours: true,
        userId: true,
        id: true,
      },
    });
    return allProviders;
  },

  createAppointment: async (
    providerId: string,
    clientId: string,
    startsAt: Date,
    endsAt: Date,
    serviceId: string
  ): Promise<Appointment> => {
    const client = await prisma.user.findUnique({ where: { id: clientId } });
    console.log(`Client:${clientId} Provider:${providerId}`);

    if (!client || client.role !== "CLIENT") {
      throw new HttpError(404, `A megadott ügyfél  nem létezik!`);
    }
    const isService = await prisma.service.findUnique({
      where: { id: serviceId },
    });

    if (!isService) {
      throw new HttpError(404, "Service not found");
    }

    const overlaps = await prisma.appointment.findFirst({
      where: {
        providerId,
        startsAt: { lt: endsAt },
        endsAt: { gt: startsAt },
        status: { in: ["PENDING", "CONFIRMED"] },
      },
    });
    if (overlaps) {
      throw new HttpError(403, "Az időpont már foglalt.");
    }

    return prisma.appointment.create({
      data: {
        providerId,
        clientId,
        startsAt,
        endsAt,
        serviceId,
        status: "PENDING",
      },
    });
  },
};

export default clientService;
