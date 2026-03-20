import { API_URL } from "../constants/enviroment";
import type { ApiResponse } from "../types/global";
import type { ListType } from "../types/listTypes";

export default async function getAllLists(
  token: string,
): Promise<ApiResponse<ListType[]>> {
  const response = await fetch(`${API_URL}/api/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}
