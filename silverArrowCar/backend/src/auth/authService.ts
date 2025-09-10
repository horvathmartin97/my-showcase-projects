import HttpError from "../utils/HttpError";
import prisma from "../utils/prisma";
import { RegisterUser } from "./authSchema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserResponse } from "./authTypes";

const authService = {
  register: async (register: RegisterUser): Promise<UserResponse> => {
    const doesUserExist = await prisma.user.count({
      where: { email: register.email },
    });
    if (doesUserExist) {
      throw new HttpError(403, "User Already Exists");
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(register.password, salt);
    return prisma.user.create({
      data: {
        name: register.name,
        email: register.email,
        password: hashedPassword,
      },
      select: { id: true, name: true, email: true, role: true },
    });
  },
};
export default authService;
