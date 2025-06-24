import { Router } from "express";
import clientController from "./clientController";
import authorize, { checkClientAcces } from "../middlewares/authorize";

const clientRouter = Router();

clientRouter.get(
  "/",
  authorize,
  checkClientAcces(),
  clientController.getAllProviders
);
clientRouter.post(
  "/:clientId/appointment",
  authorize,
  checkClientAcces(),
  clientController.createAppointment
);

export default clientRouter;
