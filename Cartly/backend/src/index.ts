import express from "express";
import cors from "cors";
import { PORT } from "./constants/global";
import authRouter from "./auth/authRoutes";
import apiRouter from "./api/apiRoutes";
import errorHandler from "./middlewares/errorHandle";
import setupSwagger from "./swagger";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/api", apiRouter);

setupSwagger(app);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
