import { WorkHour } from "@prisma/client";
import prisma from "../utils/prisma";
import { createWorkHour } from "./providerSchema";

const providerService = {
  createWorkHour: async (
    providerId: string,
    workHours: { dayOfWeek: number; startTime: string; endTime: string }[]
  ): Promise<WorkHour[]> => {
    await prisma.workHour.deleteMany({
      where: { providerId },
    });

    await prisma.workHour.createMany({
      data: workHours.map((wh) => ({
        providerId,
        dayOfWeek: wh.dayOfWeek,
        startTime: wh.startTime,

        endTime: wh.endTime,
      })),
    });

    return prisma.workHour.findMany({ where: { providerId } });
  },
  addDayOff: async (providerId: string, date: Date, reason?: string) => {
    return prisma.dayOff.create({
      data: {
        providerId,
        date,
        reason,
      },
    });
  },
};

export default providerService;
