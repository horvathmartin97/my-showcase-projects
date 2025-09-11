import { Car, Prisma } from "@prisma/client";
import { PaginatedResponse } from "../types/global";
import { addNewCarType, SearchQuerySchema } from "./carSchema";
import prisma from "../utils/prisma";
import { searchSelect } from "./carTypes";

export type SearchedCar = Prisma.CarGetPayload<{ select: typeof searchSelect }>;

const carService = {
  getAllCars: async (
    queryParameters: SearchQuerySchema
  ): Promise<PaginatedResponse<SearchedCar[]>> => {
    const currentPage = queryParameters.page > 0 ? queryParameters.page : 1;
    const pageSize =
      queryParameters.pageSize > 0 ? queryParameters.pageSize : 5;
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
            ],
          }
        : {}),
    };
    const totalCars = await prisma.car.count({ where: whereClause });
    const totalPages = Math.ceil(totalCars / pageSize);
    const cars = await prisma.car.findMany({
      where: whereClause,
      orderBy: [{ [queryParameters.sortBy]: queryParameters.order }],
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
};
export default carService;
