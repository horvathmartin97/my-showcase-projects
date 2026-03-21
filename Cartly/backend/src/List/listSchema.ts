import { z } from "zod";

export const addNewListSchema = z.object({
  name: z.string().min(5, "Name must be at least 5 chars long"),
});
export type AddNewListType = z.infer<typeof addNewListSchema>;

export const updateListSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name must be at most 50 characters")
    .trim(),
});

export type UpdateListInput = z.infer<typeof updateListSchema>;

export const idParamsSchema = z.object({
  listId: z.string().cuid({
    message: "ID must be a string",
  }),
});
