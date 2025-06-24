import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../types/global";
import { Appointment, Provider } from "@prisma/client";
import clientService from "./clientService";

const clientController = {
  getAllProviders: async (
    req: Request,
    res: Response<ApiResponse<Provider[]>>,
    next: NextFunction
  ) => {
    const allProviders = await clientService.getAllProvDates();
    res.status(201).json({
      ok: true,
      message: "All providers with their services are readed",
      data: allProviders,
    });
  },
  createAppointment: async (
    req: Request,
    res: Response<ApiResponse<Appointment>>,
    next: NextFunction
  ) => {
    try {
      const { clientId } = req.params;
      const { providerId, startsAt, endsAt, serviceId } = req.body;
      console.log("params:", req.params);
      console.log("body:", req.body);
      const appointment = await clientService.createAppointment(
        clientId,
        providerId,
        startsAt,
        endsAt,
        serviceId
      );
      res.status(201).json({
        ok: true,
        message: "Booked sucessfully",
        data: appointment,
      });
    } catch (error) {
      next(error);
    }
  },
};
export default clientController;
