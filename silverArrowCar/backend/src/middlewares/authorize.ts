import type { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/global";
import HttpError from "../utils/HttpError";

export interface AuthorizedRequest extends Request {
  user?: CheckedRole;
}

interface CheckedRole {
  id: string;
  email: string;
  name: string;
  role: string;
  iat: number;
}

export default async function authorize(
  req: AuthorizedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const bearerToken = req.headers.authorization;

    if (!bearerToken?.startsWith("Bearer ")) {
      throw new HttpError("Unauthorized, Permission denied", 401);
    }

    const token = bearerToken.slice(7);
    const payload = jwt.verify(token, JWT_SECRET as string) as CheckedRole;
    req.user = payload;

    next();
  } catch (error) {
    if (error instanceof HttpError) {
      next(error);
    } else {
      next(new HttpError("Unauthorized, Invalid token", 401));
    }
  }
}
