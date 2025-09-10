import type { ZodSchema } from "zod";
import type { Request, Response, NextFunction } from "express";

import type { ApiResponse } from "../types/global";
import HttpError from "../utils/HttpError";
import type { SearchQuerySchema } from "../location/locationSchema";

const validatedQuery =
  (schema: ZodSchema) =>
  (
    req: Request & { validatedQuery?: SearchQuerySchema },
    res: Response<ApiResponse<null>>,
    next: NextFunction
  ): void => {
    const result = schema.safeParse(req.query);

    if (!result.success) {
      throw new HttpError("Invalid query parameter");
      return;
    }

    req.validatedQuery = result.data;
    next();
  };
export default validatedQuery;
