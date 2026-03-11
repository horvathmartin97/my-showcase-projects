import type { NextFunction, Request, Response } from "express";
import { ZodType } from "zod";
import HttpError from "../utils/HttpError";

export default function validateRequestBody<T>(schema: ZodType<T>) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const validationResult = schema.safeParse(req.body);

    if (!validationResult.success) {
      const errorMessage = validationResult.error.issues
        .map((issue) => `${issue.path.join(" ")}:${issue.message}`)
        .join(", ");

      const error = new HttpError(errorMessage, 400);
      next(error);
      return;
    }

    req.body = validationResult.data;
    next();
  };
}
