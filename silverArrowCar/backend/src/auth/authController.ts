import { Request, Response, NextFunction } from "express";
import { RegisterUser } from "./authSchema";
import { ApiResponse } from "../utils/global";
import { UserResponse } from "./authTypes";
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
};
export default authController;
