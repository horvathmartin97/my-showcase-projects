import { NextFunction, Response, Request } from "express";
import { List } from "../../generated/prisma";
import { ApiResponse } from "../types/global";
import HttpError from "../utils/HttpError";
import { addNewListSchema } from "./listSchema";
import listService from "./listService";

export interface AuthorizedRequest extends Request {
  user?: {
    id: string;
    email?: string;
  };
}
const listController = {
  postList: async (
    req: AuthorizedRequest,
    res: Response<ApiResponse<List>>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      if (!req.user) {
        throw new HttpError("you must be logged in to add a new list", 401);
      }
      const parsedBody = addNewListSchema.parse(req.body);

      const newList = await listService.addNewList(parsedBody, req.user.id);
      res.status(201).json({ ok: true, message: "list added", data: newList });
    } catch (error) {
      next(error);
    }
  },
  getListById: async (
    req: AuthorizedRequest,
    res: Response<ApiResponse<List>>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const listId = req.params.listId as string;

      const result = await listService.getListById(listId);
      if (!result) {
        throw new HttpError("List not found", 404);
      }
      res.json({ ok: true, message: "List found", data: result });
    } catch (error) {
      next(error);
    }
  },
  deleteListById: async (
    req: AuthorizedRequest,
    res: Response<ApiResponse<List>>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      if (!req.user) {
        throw new HttpError("Unauthorized", 401);
      }
      const listId = req.params.listId as string;
      const list = await listService.deleteList(listId);
      res
        .status(200)
        .json({ ok: true, message: "List is deleted", data: list });
    } catch (error) {
      next(error);
    }
  },
  getLists: async (
    req: AuthorizedRequest,
    res: Response<ApiResponse<List[]>>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      if (!req.user) {
        throw new HttpError("You must be logged in", 401);
      }
      const lists = await listService.getLists(req.user.id);
      res.json({ ok: true, message: "Lists fetched", data: lists });
    } catch (error) {
      next(error);
    }
  },
};
export default listController;
