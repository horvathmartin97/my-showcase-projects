import { UserRole } from "@prisma/client";

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
export type JwtUser = {
  id: string;
  email: string;
  role: UserRole;
};
export interface AuthorizedResponse extends Request {
  params: any;
  user?: UserRole;
}
