import { NextFunction, Request, Response } from "express";
import { createWorkHour } from "./providerSchema";
import { ApiResponse } from "../types/global";
import { DayOff, Service, WorkHour } from "@prisma/client";
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
        message: "Working hours are created",
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
  createService: async (
    req: Request,
    res: Response<ApiResponse<Service>>,
    next: NextFunction
  ) => {
    try {
      const { providerId } = req.params;
      const { name, durationMin, currency, price } = req.body;
      const newService = await providerService.createService(providerId, {
        name,
        durationMin,
        currency,
        price,
      });
      res.status(201).json({
        ok: true,
        message: "Service Created",
        data: newService,
      });
    } catch (error) {
      next(error);
    }
  },
};
export default providerController;
