import { Router } from "express";
import userController from "./userController";

const userRouter = Router();
userRouter.get("/", userController.getAll);
export default userRouter;
