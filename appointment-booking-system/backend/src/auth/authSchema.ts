import { z } from "zod";

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginUser = z.infer<typeof loginUserSchema>;

export const registerUserSchema = z.object({
  email: z.string().email({ message: "email must be a valid email" }),
  name: z.string().min(4, { message: "Name must be at least 4 character" }),
  password: z
    .string()
    .min(4, { message: "password must be at least 4 characters" }),
  role: z.enum(["CLIENT", "PROVIDER"]),
});

export type RegisterUser = z.infer<typeof registerUserSchema>;
