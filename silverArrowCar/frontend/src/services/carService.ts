import { API_URL } from "@/constants/enviroment";
import type { Car } from "@/types/carTypes";

export default async function getCars(
  page: number,
  orderParams: string,
  searchTerm: string
): Promise<Car[]> {
  const order = orderParams.split("_")[1];

  try {
    const response = await fetch(
      `${API_URL}/api/car?page=${page}&pageSize=3&order=${order}&searchTerm=${searchTerm}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const apiResponse: PaginatedCarResponse = await response.json();

    return apiResponse.data;
  } catch (error) {
    console.error("Failed to fetch cars:", error);
    return [];
  }
}

export interface PaginatedCarResponse {
  ok: boolean;
  message: string;
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  data: Car[];
}

export async function getAllCars(
  page: number,
  orderParams: string,
  searchTerm: string
): Promise<PaginatedCarResponse> {
  const sortBy = orderParams.split("_")[0];
  const order = orderParams.split("_")[1];

  try {
    const response = await fetch(
      `${API_URL}/api/car?page=${page}&pageSize=8&sortBy=${sortBy}&order=${order}&searchTerm=${searchTerm}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const apiResponse: PaginatedCarResponse = await response.json();

    return apiResponse;
  } catch (error) {
    console.error("Failed to fetch cars:", error);
    return {
      ok: false,
      message: (error as Error).message,
      currentPage: 1,
      pageSize: 8,
      totalItems: 0,
      totalPages: 0,
      data: [],
    };
  }
}
