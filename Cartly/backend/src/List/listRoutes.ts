import { Router } from "express";
import listController from "./listController";
import authorize from "../middlewares/authorize";
import validatedParams from "../middlewares/validatedParams";
import {
  addMemberSchema,
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
listRouter.patch(
  "/:listId",
  authorize,
  validatedParams(idParamsSchema),
  validateRequestBody(updateListSchema),
  listController.updateListById,
);
listRouter.post(
  "/:listId/members",
  authorize,
  validatedParams(idParamsSchema),
  validateRequestBody(addMemberSchema),
  listController.addMember,
);

export default listRouter;
