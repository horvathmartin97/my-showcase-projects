import { Router } from "express";
import listController from "./listController";
import authorize from "../middlewares/authorize";
import validatedParams from "../middlewares/validatedParams";
import { addNewList, idParamsSchema } from "./listSchema";
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
  validateRequestBody(addNewList),
  listController.postList,
);
listRouter.delete(
  "/:listId",
  authorize,
  validatedParams(idParamsSchema),
  listController.deleteListById,
);

export default listRouter;
