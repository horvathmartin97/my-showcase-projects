import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email or password" }),
  password: z.string().min(1, { message: "Invalid email or password" }),
});
export type LoginUser = z.infer<typeof loginSchema>;

export const registerUserSchema = z.object({
  email: z.string().email({ message: "Email must be a valid email" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters",
  }),
});
export type RegisterUser = z.infer<typeof registerUserSchema>;
