import HttpError from "../utils/HttpError";
import prisma from "../utils/prisma";
import { LoginUser, RegisterUser } from "./authSchema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserResponse } from "./authTypes";
import { JWT_SECRET } from "../constants/global";

const authService = {
  register: async (register: RegisterUser): Promise<UserResponse> => {
    const doesUserExist = await prisma.user.count({
      where: { email: register.email },
    });
    if (doesUserExist) {
      throw new HttpError("User Already Exists", 403);
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
  login: async (loginUser: LoginUser): Promise<string> => {
    const dbUserExist = await prisma.user.findUnique({
      where: { email: loginUser.email },
    });
    if (!dbUserExist) throw new HttpError("Invalid email/password", 403);
    const isPasswordCorrect = await bcrypt.compare(
      loginUser.password,
      dbUserExist.password
    );
    if (!isPasswordCorrect) {
      throw new HttpError("invalid email/password", 403);
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
