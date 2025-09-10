import { Router } from "express";
import validateRequestBody from "../middlewares/validateRequestBody";
import { registerUserSchema } from "./authSchema";
import authController from "./authController";

const authRouter: Router = Router();

authRouter.post(
  "/register",
  validateRequestBody(registerUserSchema),
  authController.postRegister
);

export default authRouter;
