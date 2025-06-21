import { Router } from "express";
import validateReqBody from "../middlewares/validateReqBody";
import { loginUserSchema, registerUserSchema } from "./authSchema";
import authController from "./authController";

const authRouter = Router();

authRouter.post(
  "/register",
  validateReqBody(registerUserSchema),
  authController.postRegister
);

authRouter.post(
  "/login",
  validateReqBody(loginUserSchema),
  authController.postLogin
);
export default authRouter;
