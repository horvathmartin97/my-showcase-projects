import express from "express";
import { PORT } from "./constants/global";
import errorHandle from "./middlewares/errorHandle";
import cors from "cors";
import authRouter from "./auth/authRoutes";
import carRouter from "./Car/carRoutes";
import apiRouter from "./api/apiRoutes";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", apiRouter);
app.use("/auth", authRouter);
app.use("/car", carRouter);

app.use(errorHandle);

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
