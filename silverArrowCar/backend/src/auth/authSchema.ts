import { z } from "zod";

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
export type LoginUser = z.infer<typeof loginUserSchema>;

export const registerUserSchema = z.object({
  email: z.string().email({ message: "email must be valid email" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" }),
});
export type RegisterUser = z.infer<typeof registerUserSchema>;
