import { Router } from "express";
import providerController from "./providerController";

const providerRouter = Router();

providerRouter.post("/:providerId/workhours", providerController.post);

export default providerRouter;
