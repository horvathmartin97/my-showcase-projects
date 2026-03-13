import { z } from "zod";

export const itemSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
});
export type ItemSchemaType = z.infer<typeof itemSchema>;

export const updateItem = itemSchema
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided to update the items",
  });

export type UpdateItemSchema = z.infer<typeof updateItem>;
