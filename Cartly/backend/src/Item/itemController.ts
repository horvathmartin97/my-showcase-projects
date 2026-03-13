import { NextFunction, Response, Request } from "express";
import { AuthorizedRequest } from "../List/listController";
import { ApiResponse } from "../types/global";
import { Item } from "../../generated/prisma";
import HttpError from "../utils/HttpError";
import { itemSchema } from "./itemSchema";
import itemService from "./itemService";

const itemController = {
  postItem: async (
    req: AuthorizedRequest,
    res: Response<ApiResponse<Item>>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      if (!req.user) {
        throw new HttpError("Unathorized", 401);
      }
      const listId = req.params.listId as string;
      const parsedBody = itemSchema.parse(req.body);
      const newItem = await itemService.postItem(parsedBody, listId);
      res.status(201).json({ ok: true, message: "Item added", data: newItem });
    } catch (error) {
      next(error);
    }
  },
  deleteItemById: async (
    req: AuthorizedRequest,
    res: Response<ApiResponse<Item>>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      if (!req.user) {
        throw new HttpError("Unauthorized", 401);
      }
      const itemId = req.params.itemId as string;
      const item = await itemService.deleteItem(itemId);
      res
        .status(200)
        .json({ ok: true, message: "Item is deleted", data: item });
    } catch (error) {
      next(error);
    }
  },
};
export default itemController;
