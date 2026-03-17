import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "Érvénytelen e-mail formátum" }),
  password: z.string().min(1, { message: "Kérlek, add meg a jelszavad" }),
});
export type LoginUser = z.infer<typeof loginSchema>;

export const registerUserSchema = z.object({
  email: z.email({ message: "Az e-mail címnek érvényesnek kell lennie" }),
  name: z
    .string()
    .min(2, { message: "A névnek legalább 2 karakter hosszúnak kell lennie" }),
  password: z.string().min(4, {
    message: "A jelszónak legalább 4 karakter hosszúnak kell lennie",
  }),
});
export type RegisterUser = z.infer<typeof registerUserSchema>;
