import { Router } from "express";
import validateRequestBody from "../middlewares/validateReqBody";
import { loginUserSchema, registerUserSchema } from "./authSchema";
import authController from "./authController";

const authRouter: Router = Router();

authRouter.post(
  "/register",
  validateRequestBody(registerUserSchema),
  authController.postRegister,
);
authRouter.post(
  "/login",
  validateRequestBody(loginUserSchema),
  authController.postLogin,
);
export default authRouter;
