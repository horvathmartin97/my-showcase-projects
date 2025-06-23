import { User } from "@prisma/client";
import prisma from "../utils/prisma";

const userService = {
  getAllUser: async () => {
    return await prisma.user.findMany({
      select: {
        email: true,
        appointments: true,
        name: true,
        role: true,
        id: true,
        password: false,
        Provider: {
          select: {
            dayOffs: true,
            services: true,
            WeeklyDayOff: true,
            workHours: true,
            appointments: true,
          },
        },
      },
    });
  },
};
export default userService;
