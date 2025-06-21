import { ZodSchema } from "zod";
import { ApiResponse } from "../types/global";
import { NextFunction, Request, Response } from "express";

export default function validateReqBody<T>(schema: ZodSchema<T>) {
  return (req: Request, res: Response<ApiResponse<{}>>, next: NextFunction) => {
    const validationResult = schema.safeParse(req.body);
    if (!validationResult.success) {
      const errrorMessage = validationResult.error.errors
        .map((err) => `${err.path.join(". ")}: ${err.message}`)
        .join(";");
      console.log(validationResult.error);
      res.status(400).json({ ok: false, message: errrorMessage, data: {} });
      return;
    }
    req.body = validationResult.data;
    next();
  };
}
