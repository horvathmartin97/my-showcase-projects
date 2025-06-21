import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../types/global";
import HttpError from "../utils/HttpError";

export default function errorHandle(
  error: HttpError,
  req: Request,
  res: Response<ApiResponse<{}>>,
  next: NextFunction
) {
  console.log("Error", error);
  res.status(error.statusCode ?? 500).json({
    ok: false,
    message: error.message ?? "Internal server error",
    data: {},
  });
}
