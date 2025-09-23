import { API_URL } from "@/constants/enviroment";
import type { Car } from "@/types/carTypes";

export interface PaginatedCarResponse {
  ok: boolean;
  message: string;
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  data: Car[];
}

export default async function getAllCars(): Promise<Car[]> {
  try {
    const response = await fetch(`${API_URL}/api/car`);

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
