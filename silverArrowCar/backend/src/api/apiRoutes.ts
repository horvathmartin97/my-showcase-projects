import { Router } from "express";
import carRouter from "../Car/carRoutes";
const router = Router();
router.use("/car", carRouter);
export default router;
