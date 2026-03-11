import { Router } from "express";
import listRouter from "../List/listRoutes";

const router = Router();

router.use("/list", listRouter);

export default router;
