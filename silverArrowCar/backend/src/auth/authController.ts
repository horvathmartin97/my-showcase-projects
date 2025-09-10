import { Request, Response, NextFunction } from "express";
import { LoginUser, RegisterUser } from "./authSchema";
import { ApiResponse } from "../utils/global";
import { LoginUserResponseData, UserResponse } from "./authTypes";
import authService from "./authService";

const authController = {
  postRegister: async (
    req: Request<{}, {}, RegisterUser>,
    res: Response<ApiResponse<UserResponse>>,
    next: NextFunction
  ): Promise<void> => {
    try {
      const newUser = await authService.register(req.body);
      res.json({ ok: true, message: "User registered", data: newUser });
    } catch (error) {
      next(error);
    }
  },
  postLogin: async (
    req: Request<unknown, unknown, LoginUser>,
    res: Response<ApiResponse<LoginUserResponseData>>,
    next: NextFunction
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
