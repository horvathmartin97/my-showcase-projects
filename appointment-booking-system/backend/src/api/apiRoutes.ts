import { Router } from "express";
import providerRouter from "../provider/providerRoutes";
import userController from "../user/userController";
import userRouter from "../user/userRoutes";

const router = Router();
router.use("/provider", providerRouter);
router.use("/user", userRouter);

export default router;
