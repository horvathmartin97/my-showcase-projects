import { Router } from "express";
import listController from "./listController";
import authorize from "../middlewares/authorize";
import validatedParams from "../middlewares/validatedParams";
import {
  addNewListSchema,
  idParamsSchema,
  updateListSchema,
} from "./listSchema";
import validateRequestBody from "../middlewares/validateReqBody";

const listRouter: Router = Router();

listRouter.get("/", authorize, listController.getLists);
listRouter.get(
  "/:listId",
  authorize,
  validatedParams(idParamsSchema),
  listController.getListById,
);
listRouter.post(
  "/",
  authorize,
  validateRequestBody(addNewListSchema),
  listController.postList,
);
listRouter.delete(
  "/:listId",
  authorize,
  validatedParams(idParamsSchema),
  listController.deleteListById,
);
listRouter.put(
  "/:listId",
  authorize,
  validatedParams(idParamsSchema),
  validateRequestBody(updateListSchema),
  listController.updateListById,
);

export default listRouter;
