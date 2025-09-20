import { API_URL } from "../constants/enviroment";
import type { LoginResponse, RegisterResponse } from "../types/authTypes";
import type { ApiResponse } from "../types/global";

const authService = {
  async register(
    email: string,
    name: string,
    password: string
  ): Promise<ApiResponse<RegisterResponse>> {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, password }),
    });
    return response.json();
  },
  async login(
    email: string,
    password: string
  ): Promise<ApiResponse<LoginResponse>> {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  },
};
export default authService;
