import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod";
import HttpError from "../utils/HttpError";

const validatedParams =
  <T extends ZodSchema>(schema: T) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result = schema.safeParse(req.params);
    if (!result.success) {
      throw new HttpError("Invalid parameter", 400);
    }

    req.params = result.data;
    next();
  };

export default validatedParams;
