import { NextFunction, Request, Response } from "express";
import { createWorkHour } from "./providerSchema";
import { ApiResponse } from "../types/global";
import { WorkHour } from "@prisma/client";
import providerService from "./providerService";

const providerController = {
  post: async (
    req: Request,
    res: Response<ApiResponse<WorkHour[]>>,
    next: NextFunction
  ) => {
    try {
      const { providerId } = req.params;
      const workHours = req.body;
      const newWorkHour = await providerService.createWorkHour(
        providerId,
        workHours
      );
      res.status(201).json({
        ok: true,
        message: "Working hours is created",
        data: newWorkHour,
      });
    } catch (error) {
      next(error);
    }
  },
};
export default providerController;
