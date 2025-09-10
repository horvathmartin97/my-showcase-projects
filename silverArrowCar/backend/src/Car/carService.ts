import { Car } from "@prisma/client";
import { PaginatedResponse } from "../types/global";
import { SearchQuerySchema } from "./carSchema";

const carService = {
  getAllCars: async (
    queryParameters: SearchQuerySchema
  ): Promise<PaginatedResponse<Car[]>> => {},
};
export default carService;
