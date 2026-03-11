import { email } from "zod";
import HttpError from "../utils/HttpError";
import prisma from "../utils/prisma";
import { LoginUserType, RegisterUserType } from "./authSchema";
import { UserResponse } from "./authTypes";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/global";
const authService = {
  register: async (register: RegisterUserType): Promise<UserResponse> => {
    const doesUserExist = await prisma.user.count({
      where: { email: register.email },
    });
    if (doesUserExist) {
      throw new HttpError("User with this email already exist");
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(register.password, salt);
    const { password, ...userWithoutPassword } = await prisma.user.create({
      data: {
        name: register.name,
        email: register.email,
        password: hashedPassword,
      },
    });
    return userWithoutPassword;
  },
  login: async (login: LoginUserType): Promise<string> => {
    const dbUserExist = await prisma.user.findUnique({
      where: { email: login.email },
    });
    if (!dbUserExist) {
      throw new HttpError("Invalid email or passord", 403);
    }
    const isPasswordCorrect = await bcrypt.compare(
      login.password,
      dbUserExist.password,
    );
    if (!isPasswordCorrect) {
      throw new HttpError("Invalid email or password", 403);
    }
    const jwtPayload = {
      id: dbUserExist.id,
      email: dbUserExist.email,
      name: dbUserExist.name,
    };
    const token = jwt.sign(jwtPayload, JWT_SECRET as string);
    return token;
  },
};
export default authService;
