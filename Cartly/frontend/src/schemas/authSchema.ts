import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "Invalid email format" }),
  password: z.string().min(1, { message: "Password is invalid password" }),
});
export type LoginUser = z.infer<typeof loginSchema>;

export const registerUserSchema = z.object({
  email: z.email({ message: "Email must be a valid email" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  password: z.string().min(4, {
    message: "A jelszónak legalább 4 karakter hosszúnak kell lennie",
  }),
});
export type RegisterUser = z.infer<typeof registerUserSchema>;
