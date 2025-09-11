import { Application, NextFunction, Request, Response } from "express";
import { addNewCarSchema, SearchQuerySchema } from "./carSchema";
import { ApiResponse, PaginatedResponse } from "../types/global";
import { Car, Prisma } from "@prisma/client";
import HttpError from "../utils/HttpError";
import carService, { SearchedCar } from "./carService";
export interface AuthorizedRequest extends Request {
  user?: {
    id: string;
    email?: string;
  };
}

const carController = {
  getAllCars: async (
    req: Request & { validatedQuery?: SearchQuerySchema },
    res: Response<PaginatedResponse<SearchedCar[]>>,
    next: NextFunction
  ): Promise<void> => {
    try {
      if (!req.validatedQuery) {
        throw new HttpError("Missing validated query parameters", 404);
      }
      const queryParameters = req.validatedQuery;
      const response = await carService.getAllCars(queryParameters);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },
  addCar: async (
    req: AuthorizedRequest,
    res: Response<ApiResponse<Car>>,
    next: NextFunction
  ): Promise<void> => {
    try {
      if (!req.user) throw new HttpError("Unauthorized", 401);
      const parsedBody = addNewCarSchema.parse(req.body);

      const newCar = await carService.addCar(parsedBody, req.user?.id);
      res.status(201).json({ ok: true, message: "Card added", data: newCar });
    } catch (error) {
      next(error);
    }
  },
};
export default carController;
