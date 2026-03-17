import { Router } from "express";
import listRouter from "../List/listRoutes";
import itemRouter from "../Item/itemRoutes";

const router = Router();

router.use("/list", listRouter);
router.use("/item", itemRouter);

export default router;
