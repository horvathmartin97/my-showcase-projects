import { NextFunction, Request, Response } from "express";
import userService from "./userService";
import { ApiResponse } from "../types/global";
import { User } from "@prisma/client";

const userController = {
  getAll: async (
    req: Request,
    res: Response<ApiResponse<Omit<User, "password">[]>>,
    next: NextFunction
  ) => {
    try {
      const allUsers = await userService.getAllUser();
      res.json({
        ok: true,
        message: "readed",
        data: allUsers,
      });
    } catch (error) {
      next(error);
    }
  },
};
export default userController;
