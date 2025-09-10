import express from "express";
import { PORT } from "./constants/global";
import errorHandle from "./middlewares/errorHandle";
import cors from "cors";
import authRouter from "./auth/authRoutes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
