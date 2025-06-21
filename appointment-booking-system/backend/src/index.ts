import express from "express";
import { PORT } from "./constants/global";
import errorHandle from "./middlewares/errorHandle";
import apiRoute from "./api/apiRoutes";

const app = express();
app.use(express.json());
app.use("/api", apiRoute);

app.use(errorHandle);

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
