import { Router } from "express";
import providerController from "./providerController";

const providerRouter = Router();

providerRouter.post("/:providerId/workhours", providerController.post);
providerRouter.post("/:providerId/dayoff", providerController.addDayOff);
providerRouter.post("/:providerId/service", providerController.createService);

export default providerRouter;
