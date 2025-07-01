import { NextFunction, Request, Response } from "express";
import { ApiResponse, AuthorizedResponse, JwtUser } from "../types/global";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/global";
import { User, UserRole } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user?: JwtUser;
    }
  }
}
export default function authorize(
  req: Request,
  res: Response<ApiResponse<{}>>,
  next: NextFunction
) {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    res.send({
      ok: false,
      message: "Token is missing",
      data: {},
    });
    return;
  }
  const token = bearerToken.slice(7);

  try {
    const decoded = jwt.verify(token, JWT_SECRET as string) as {
      userId: string;
      email: string;
      role: string;
      providerId?: string;
    };
    console.log("Decoded JWT:", decoded);
    req.user = {
      id: decoded.userId,
      email: decoded.email,
      role: decoded.role as UserRole,
      providerId: decoded.providerId,
    };
    next();
  } catch (error) {
    res.send({
      ok: false,
      message: "Unauthorized premission denied",
      data: {},
    });
  }
}
export function checkClientAcces() {
  return (req: Request, res: Response<ApiResponse<{}>>, next: NextFunction) => {
    const user = req.user;
    const reqUserId = req.params.userId;

    if (user?.role === "PROVIDER") {
      next();
      return;
    }

    if (user?.role === "CLIENT") {
      if (user?.id !== reqUserId) {
        res.send({
          ok: false,
          message: "You have only access to your own data",
          data: {},
        });
        return;
      }
      next();
      return;
    }
  };
}

export function onlyProvider() {
  return (req: Request, res: Response<ApiResponse<{}>>, next: NextFunction) => {
    const user = req.user;

    if (user?.role === "PROVIDER") {
      next();
      return;
    }
    res.json({ ok: false, message: "Access denied", data: {} });
    return;
  };
}
