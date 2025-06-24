import { NextFunction, Request, Response } from "express";
import { createWorkHour } from "./providerSchema";
import { ApiResponse, AppointmentWithClient } from "../types/global";
import {
  Appointment,
  DayOff,
  Service,
  WeeklyDayOff,
  WorkHour,
} from "@prisma/client";
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
      if (!Array.isArray(workHours)) {
        res
          .status(400)
          .json({ ok: false, message: "expected array", data: [] });
      }

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
  setWeeklyDayOff: async (
    req: Request,
    res: Response<ApiResponse<WeeklyDayOff[]>>,
    next: NextFunction
  ) => {
    try {
      const { providerId } = req.params;
      const { days, reason } = req.body;
      if (!Array.isArray(days)) {
        res
          .status(400)
          .json({ ok: false, message: "expected array", data: [] });
      }
      const weeklyDayOff = await providerService.setWeeklyDayOffs(
        providerId,
        days,
        reason
      );

      res.status(201).json({
        ok: true,
        message: "Weekly Day Offs are all set",
        data: weeklyDayOff,
      });
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
  acceptAppointment: async (
    req: Request,
    res: Response<ApiResponse<Appointment>>,
    next: NextFunction
  ) => {
    try {
      const { appointmentId } = req.params;
      const acceptAppointment = await providerService.acceptAppointment(
        appointmentId
      );
      res.status(201).json({
        ok: true,
        message: `Appointment accepted:${appointmentId}`,
        data: acceptAppointment,
      });
    } catch (error) {
      next(error);
    }
  },
  rejectAppointment: async (
    req: Request,
    res: Response<ApiResponse<Appointment>>,
    next: NextFunction
  ) => {
    try {
      const { appointmentId } = req.params;
      console.log(appointmentId);
      const rejectAppointment = await providerService.rejectAppointmnet(
        appointmentId
      );
      res.status(201).json({
        ok: true,
        message: `Appointment rejected: ${appointmentId}`,
        data: rejectAppointment,
      });
    } catch (error) {
      next(error);
    }
  },
  getBookedAppointments: async (
    req: Request,
    res: Response<ApiResponse<AppointmentWithClient[]>>,
    next: NextFunction
  ) => {
    try {
      const { providerId } = req.params;
      const allAppointments = await providerService.getBookedAppointments(
        providerId
      );
      res.status(201).json({
        ok: true,
        message: "Booked appointments readed",
        data: allAppointments,
      });
    } catch (error) {
      next(error);
    }
  },
};
export default providerController;
