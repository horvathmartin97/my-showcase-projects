import { z } from "zod";

const searchQuerySchema = z.object({
  page: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : 1))
    .refine((val) => Number.isInteger(val) && val > 0, {
      message: "Page must be a positive integer",
    }),
  pageSize: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : 8))
    .refine((val) => Number.isInteger(val) && val > 0, {
      message: "PageSize must be a positive integer",
    }),
  sortBy: z.string().optional().default("createdAt"),
  order: z.enum(["asc", "desc"]).optional().default("desc"),
  searchTerm: z.string().optional(),
});
export default searchQuerySchema;
export type SearchQuerySchema = z.infer<typeof searchQuerySchema>;
