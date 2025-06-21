import prisma from "../utils/prisma";
import { LoginUser, RegisterUser } from "./authSchema";
import HttpError from "../utils/HttpError";
import bcrypt from "bcryptjs";
import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../constants/global";

const authService = {
  register: async (register: RegisterUser) => {
    const doesUserExist = await prisma.user.count({
      where: {
        email: register.email,
      },
    });
    if (doesUserExist) {
      throw new HttpError(403, "User already exists");
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(register.password, salt);
    return prisma.user.create({
      data: {
        name: register.name,
        email: register.email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        isDeleted: true,
      },
    });
  },
  login: async (loginUser: LoginUser) => {
    const doesUserExist = await prisma.user.count({
      where: {
        email: loginUser.email,
      },
    });
    if (!doesUserExist) {
      throw new HttpError(403, "Invalid email/password");
    }
    const dbUser = (await prisma.user.findUnique({
      where: { email: loginUser.email },
    })) as User;
    const isPasswordCorrect = bcrypt.compareSync(
      loginUser.password,
      dbUser?.password
    );
    if (!isPasswordCorrect) {
      throw new HttpError(403, "invalid email/password");
    }
    const jwtPayload = {
      userId: dbUser.id,
      email: dbUser.email,
      role: dbUser.role,
    };
    const token = jwt.sign(jwtPayload, JWT_SECRET as string);
    return token;
  },
};
export default authService;
