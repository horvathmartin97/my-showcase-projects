export type ApiResponse<T> = {
  ok: boolean;
  message: string;
  data: T | null;
};

export type LoginUserResponseData = { token: string };

export type AuthReqObject<T> = {
  id: string;
  email: string;
  role: string;
};
