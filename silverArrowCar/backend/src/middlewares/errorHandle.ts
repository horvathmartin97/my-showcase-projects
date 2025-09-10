import type { NextFunction, Request, Response } from "express";
import type { ApiResponse } from "../types/global";

import type HttpError from "../utils/HttpError";

export default function errorHandler(
    error: HttpError,
    req: Request,
    res: Response<ApiResponse<null>>,
    next: NextFunction // eslint-disable-line
): void {
    console.log(error); // eslint-disable-line
    res.status(error.statusCode).json({
        ok: false,
        message: error.message ?? "Internal server error",
        data: null,
    });
}
