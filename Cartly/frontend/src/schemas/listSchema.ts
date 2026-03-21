import { z } from "zod";

export const addNewList = z.object({
  name: z.string().min(5, "Name must be at least 5 chars long"),
});
export type AddNewListType = z.infer<typeof addNewList>;
export const idParamsSchema = z.object({
  listId: z.string().cuid({
    message: "ID must be a string",
  }),
});
