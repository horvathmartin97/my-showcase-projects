import { API_URL } from "../constants/enviroment";
import type { ApiResponse } from "../types/global";
import type { Item } from "../types/listTypes";

export async function addItem(
  listId: string,
  name: string,
  quantity: number,
  token: string,
): Promise<ApiResponse<Item>> {
  const response = await fetch(`${API_URL}/api/item/${listId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, quantity }),
  });
  if (!response.ok) throw new Error("Failed to add item");
  return response.json();
}
