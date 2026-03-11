import { json } from "zod";
import { ApiResponse } from "../types/global";
import { LoginUserType, RegisterUserType } from "./authSchema";
import authService from "./authService";
import { LoginUserResponseData, UserResponse } from "./authTypes";
import { Request, Response, NextFunction } from "express";

const authController = {
  postRegister: async (
    req: Request<{}, {}, RegisterUserType>,
    res: Response<ApiResponse<UserResponse>>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const newUser = await authService.register(req.body);
      res.json({
        ok: true,
        message: "User registered successfully",
        data: newUser,
      });
    } catch (error) {
      next(error);
    }
  },
  postLogin: async (
    req: Request<unknown, unknown, LoginUserType>,
    res: Response<ApiResponse<LoginUserResponseData>>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const token = await authService.login(req.body);
      res.json({
        ok: true,
        message: "Successfully logged in",
        data: { token },
      });
    } catch (error) {
      next(error);
    }
  },
};
export default authController;
