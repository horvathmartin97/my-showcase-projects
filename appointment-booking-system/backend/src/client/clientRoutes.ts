import { Router } from "express";
import clientController from "./clientController";
import authorize from "../middlewares/authorize";

const clientRouter = Router();

clientRouter.get("/", authorize, clientController.getAllProviders);
clientRouter.post(
  "/:clientId/appointment",
  authorize,
  clientController.createAppointment
);

export default clientRouter;
