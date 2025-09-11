import { Router } from "express";
import validatedQuery from "../middlewares/validateQuery";
import searchQuerySchema, { addNewCarSchema } from "./carSchema";
import carController from "./carController";
import authorize from "../middlewares/authorize";
import validateRequestBody from "../middlewares/validateRequestBody";

const carRouter: Router = Router();

carRouter.get("/", validatedQuery(searchQuerySchema), carController.getAllCars);
carRouter.post(
  "/",
  authorize,
  validateRequestBody(addNewCarSchema),
  carController.addCar
);
export default carRouter;
