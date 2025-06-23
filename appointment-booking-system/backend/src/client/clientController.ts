import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../types/global";
import { Provider } from "@prisma/client";
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
};
export default clientController;
