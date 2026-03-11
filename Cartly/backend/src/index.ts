import express from "express";
import cors from "cors";
import { PORT } from "./constants/global";
import authRouter from "./auth/authRoutes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
