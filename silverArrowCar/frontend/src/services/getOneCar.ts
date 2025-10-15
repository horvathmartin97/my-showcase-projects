import { API_URL } from "@/constants/enviroment";
import type { Car } from "@/constants/types";
type CarResponse = {
  ok: boolean;
  message: string;
  data: Car;
};

export default async function getOneCar(carId: string): Promise<CarResponse> {
  const response = await fetch(`${API_URL}/car/${carId}`);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`backend Error ${errorText}`);
  }
  return response.json();
}
