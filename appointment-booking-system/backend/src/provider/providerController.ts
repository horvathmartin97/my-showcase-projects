import { NextFunction, Request, Response } from "express";
import { createWorkHour } from "./providerSchema";
import { ApiResponse } from "../types/global";
import { DayOff, WorkHour } from "@prisma/client";
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
  addDayOff: async (
    req: Request,
    res: Response<ApiResponse<DayOff>>,
    next: NextFunction
  ) => {
    try {
      const { providerId } = req.params;
      const { date, reason } = req.body;
      const dayOff = await providerService.addDayOff(
        providerId,
        new Date(date),
        reason
      );
      res
        .status(201)
        .json({ ok: true, message: "Day Off is addedd", data: dayOff });
    } catch (error) {
      next(error);
    }
  },
};
export default providerController;
