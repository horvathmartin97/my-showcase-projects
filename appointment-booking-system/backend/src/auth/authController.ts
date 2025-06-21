import { User } from "@prisma/client";
import { ApiResponse, LoginUserResponseData } from "../types/global";
import { NextFunction, Request, Response } from "express";
import { LoginUser, RegisterUser } from "./authSchema";
import authService from "./authService";
import prisma from "../utils/prisma";

const authController = {
  postRegister: async (
    req: Request<{}, {}, RegisterUser>,
    res: Response<ApiResponse<Omit<User, "password">>>,
    next: NextFunction
  ) => {
    try {
      const newUser = await authService.register(req.body);
      res.json({
        ok: true,
        message: "You are successfully registered",
        data: newUser,
      });
    } catch (error) {
      next(error);
    }
  },
  postLogin: async (
    req: Request<{}, {}, LoginUser>,
    res: Response<ApiResponse<LoginUserResponseData>>,
    next: NextFunction
  ) => {
    try {
      const token = await authService.login(req.body);
      res.json({
        ok: true,
        message: "You 're logged in!",
        data: { token },
      });
    } catch (error) {
      next(error);
    }
  },
};
export default authController;
