import { z } from "zod";

export const workHoursSchema = z.object({
  dayOfWeek: z
    .number()
    .min(1, "Day of week must be between Monday - Saturday")
    .max(6),
  startTime: z.string(),
  endTime: z.string(),
  providerId: z.string(),
});

export type createWorkHour = z.infer<typeof workHoursSchema>;
