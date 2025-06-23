import { Provider } from "@prisma/client";
import prisma from "../utils/prisma";
import { dmmfToRuntimeDataModel } from "@prisma/client/runtime/library";

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
};

export default clientService;
