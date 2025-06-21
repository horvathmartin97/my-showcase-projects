import { User } from "@prisma/client";
import prisma from "../utils/prisma";

const userService = {
  getAllUser: () => {
    return prisma.user.findMany({
      select: {
        email: true,
        appointments: true,
        name: true,
        role: true,
        id: true,
        password: false,
        Provider: {
          select: {
            id: true,
            workHours: true,
            dayOffs: true,
            services: true,
            WeeklyDayOff: true,
          },
        },
      },
    });
  },
};
export default userService;
