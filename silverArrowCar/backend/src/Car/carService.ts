import { BodyType, Car, Prisma } from "@prisma/client";
import { PaginatedResponse } from "../types/global";
import { addNewCarType, SearchQuerySchema } from "./carSchema";
import prisma from "../utils/prisma";
import { searchSelect } from "./carTypes";
import HttpError from "../utils/HttpError";

export type SearchedCar = Prisma.CarGetPayload<{ select: typeof searchSelect }>;

const carService = {
  getAllCars: async (
    queryParameters: SearchQuerySchema
  ): Promise<PaginatedResponse<SearchedCar[]>> => {
    const currentPage = queryParameters.page > 0 ? queryParameters.page : 1;
    const pageSize =
      queryParameters.pageSize > 0 ? queryParameters.pageSize : 8;
    const skip = (currentPage - 1) * pageSize;

    const whereClause: Prisma.CarWhereInput = {
      ...(queryParameters.searchTerm
        ? {
            OR: [
              {
                carModel: {
                  contains: queryParameters.searchTerm,
                  mode: Prisma.QueryMode.insensitive,
                },
              },
              {
                carBrand: {
                  contains: queryParameters.searchTerm,
                  mode: Prisma.QueryMode.insensitive,
                },
              },
              {
                color: {
                  contains: queryParameters.searchTerm,
                  mode: Prisma.QueryMode.insensitive,
                },
              },
            ],
          }
        : {}),
    };
    const orderBy = {
      [queryParameters.sortBy]: queryParameters.order,
    };

    const totalCars = await prisma.car.count({ where: whereClause });
    const totalPages = Math.ceil(totalCars / pageSize);
    const cars = await prisma.car.findMany({
      where: whereClause,
      orderBy: [orderBy],
      skip,
      take: pageSize,
      select: searchSelect,
    });
    return {
      ok: true,
      message: "Cars retrieved successfully",
      currentPage,
      pageSize: pageSize,
      totalItems: totalCars,
      totalPages,
      data: cars,
    };
  },
  addCar: async (
    data: addNewCarType,
    userId: string
  ): Promise<Prisma.CarGetPayload<{}>> => {
    const newCar = await prisma.car.create({
      data: {
        ...data,
        createdBy: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return newCar;
  },
  getCarById: async (carId: string): Promise<Car> => {
    const doesCarExist = await prisma.car.findUnique({ where: { id: carId } });
    if (!doesCarExist) throw new HttpError("Car is not exists", 404);
    return doesCarExist;
  },
  deleteById: async (carId: string): Promise<Car> => {
    const isCarExist = await prisma.car.findUnique({
      where: { id: carId },
    });
    if (!isCarExist) {
      throw new HttpError("Car is Not Found", 404);
    }
    return await prisma.car.delete({ where: { id: carId } });
  },
};
export default carService;
