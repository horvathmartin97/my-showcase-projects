import type { Request, Response, NextFunction } from "express";
import type { ZodType } from "zod";
import HttpError from "../utils/HttpError";

const validatedParams =
  <T extends ZodType>(schema: T) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result = schema.safeParse(req.params);
    if (!result.success) {
      next(new HttpError("Invalid parameter", 400));
    }

    req.params = result.data as typeof req.params;
    next();
  };

export default validatedParams;
