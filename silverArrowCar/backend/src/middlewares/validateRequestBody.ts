import type { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import HttpError from "../utils/HttpError";

export default function validateRequestBody<T>(schema: ZodSchema<T>) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const validationResoul = schema.safeParse(req.body);

    if (!validationResoul.success) {
      const errorMessage = validationResoul.error.errors
        .map((error) => `${error.path.join(" ")}:${error.message}`)
        .join(", ");

      const error = new HttpError(400, errorMessage);

      next(error);
      return;
    }

    req.body = validationResoul.data;
    next();
  };
}
