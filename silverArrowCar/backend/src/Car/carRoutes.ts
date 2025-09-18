import { Router } from "express";
import validatedQuery from "../middlewares/validateQuery";
import searchQuerySchema, {
  addNewCarSchema,
  idParamsSchema,
} from "./carSchema";
import carController from "./carController";
import authorize from "../middlewares/authorize";
import validateRequestBody from "../middlewares/validateRequestBody";
import validatedParams from "../middlewares/validatedParams";

const carRouter: Router = Router();

carRouter.get("/", validatedQuery(searchQuerySchema), carController.getAllCars);
carRouter.get(
  "/:carId",
  validatedParams(idParamsSchema),
  carController.getById
);
carRouter.post(
  "/",
  authorize,
  validateRequestBody(addNewCarSchema),
  carController.addCar
);
carRouter.delete(
  "/:carId",
  authorize,
  validatedParams(idParamsSchema),
  carController.deleteById
);

export default carRouter;
