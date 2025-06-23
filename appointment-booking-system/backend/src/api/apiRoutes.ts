import { Router } from "express";
import providerRouter from "../provider/providerRoutes";
import userController from "../user/userController";
import userRouter from "../user/userRoutes";
import clientRouter from "../client/clientRoutes";

const router = Router();
router.use("/provider", providerRouter);
router.use("/user", userRouter);
router.use("/client", clientRouter);

export default router;
