import { z } from "zod";

export const workHoursSchema = z.array(
  z.object({
    dayOfWeek: z
      .number()
      .min(1, "Day of week must be between Monday - Saturday")
      .max(7, "Day of week must be between Monday - Saturday"),
    startTime: z.string(),
    endTime: z.string(),
    providerId: z.string(),
  })
);

export const weeklyDayOffSchema = z.array(
  z.object({
    reason: z.string().optional(),
    dayOfWeek: z.number(),
  })
);

export type createWeeklyDayOff = z.infer<typeof weeklyDayOffSchema>;

export type createWorkHour = z.infer<typeof workHoursSchema>;
