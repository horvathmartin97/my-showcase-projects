import { Router } from "express";
import clientController from "./clientController";
import authorize from "../middlewares/authorize";

const clientRouter = Router();

clientRouter.get("/", authorize, clientController.getAllProviders);

export default clientRouter;
