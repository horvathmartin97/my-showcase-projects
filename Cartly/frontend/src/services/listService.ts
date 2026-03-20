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
export async function getMyDetailedList(
  listId: string,
  token: string,
): Promise<ApiResponse<ListType>> {
  const response = await fetch(`${API_URL}/api/list/${listId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Backend error ${errorText}`);
  }
  return response.json();
}
