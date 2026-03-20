import { API_URL } from "../constants/enviroment";
import type { ApiResponse } from "../types/global";
import type { ListType, Item } from "../types/listTypes";

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

export async function toggleItem(
  itemId: string,
  checked: boolean,
  token: string,
): Promise<ApiResponse<Item>> {
  const response = await fetch(`${API_URL}/api/item/${itemId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ checked }),
  });
  if (!response.ok) throw new Error("Failed to update item");
  return response.json();
}
