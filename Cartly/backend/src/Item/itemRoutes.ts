import { Router } from "express";
import authorize from "../middlewares/authorize";
import itemService from "./itemService";
import validateRequestBody from "../middlewares/validateReqBody";
import { itemSchema, updateItem } from "./itemSchema";
import itemController from "./itemController";
import validatedParams from "../middlewares/validatedParams";
import { idParamsSchema } from "../List/listSchema";

const itemRouter: Router = Router();

itemRouter.post(
  "/:listId",
  authorize,
  validateRequestBody(itemSchema),
  itemController.postItem,
);
itemRouter.get(
  "/:itemId",
  authorize,
  validatedParams(idParamsSchema),
  itemController.getItemById,
);
itemRouter.patch(
  "/:itemId",
  authorize,
  validatedParams(idParamsSchema),
  validateRequestBody(updateItem),
  itemController.updateItemById,
);
itemRouter.delete(
  "/:itemId",
  authorize,
  validatedParams(idParamsSchema),
  itemController.deleteItemById,
);
export default itemRouter;
