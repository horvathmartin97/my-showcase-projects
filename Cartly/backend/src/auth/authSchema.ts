import { z } from "zod";
export const loginUserSchema = z.object({
  email: z.email({ message: "email must be a valid email" }),
  password: z.string(),
});
export type LoginUserType = z.infer<typeof loginUserSchema>;

export const registerUserSchema = z.object({
  email: z.email({ message: "email must be a valid email" }),
  name: z.string().min(2, { message: "name must be at least 2 characters" }),
  password: z
    .string()
    .min(4, { message: "password must be at least 4 characters" }),
});
export type RegisterUserType = z.infer<typeof registerUserSchema>;
