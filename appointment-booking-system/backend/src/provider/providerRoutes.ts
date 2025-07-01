import { Router } from "express";
import providerController from "./providerController";
import authorize, { onlyProvider } from "../middlewares/authorize";
import validateReqBody from "../middlewares/validateReqBody";
import { weeklyDayOffSchema, workHoursSchema } from "./providerSchema";

const providerRouter = Router();

providerRouter.post(
  "/:providerId/workhours",
  authorize,
  onlyProvider(),
  validateReqBody(workHoursSchema),
  providerController.post
);
providerRouter.post(
  "/:providerId/dayoff",
  authorize,
  onlyProvider(),
  providerController.addDayOff
);
providerRouter.post(
  "/:providerId/service",
  authorize,
  onlyProvider(),
  providerController.createService
);
providerRouter.post(
  "/:providerId/weeklydayoff",
  authorize,
  onlyProvider(),

  providerController.setWeeklyDayOff
);
providerRouter.patch(
  "/:appointmentId/accept",
  authorize,
  onlyProvider(),
  providerController.acceptAppointment
);
providerRouter.patch(
  "/:appointmentId/reject",
  authorize,
  onlyProvider(),
  providerController.rejectAppointment
);
providerRouter.get(
  "/appointments",
  authorize,
  onlyProvider(),
  providerController.getBookedAppointments
);

export default providerRouter;
