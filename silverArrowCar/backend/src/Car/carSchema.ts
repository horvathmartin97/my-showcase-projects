import {
  AirConditioning,
  BodyType,
  Condition,
  DriveType,
  engineType,
  FuelType,
  TransmissionType,
} from "@prisma/client";
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

export const addNewCarSchema = z.object({
  carBrand: z.string().min(3, "Car Brand must be at least 3 character long"),
  carModel: z.string().min(2, "Car model must be at least 2 characters long"),
  builtYear: z.number().min(1980, "Invalid number"),
  price: z.number().positive("Price must be a positive number"),
  currency: z.string().min(3, "Currency must be 3 chars long"),
  mileage: z.number().int().min(0),
  description: z.string().optional(),
  image: z.string().array(),
  color: z.string(),
  transmission: z.nativeEnum(TransmissionType),
  fuelType: z.nativeEnum(FuelType),
  mileageValue: z.string().default("km"),
  bodyType: z.nativeEnum(BodyType),
  driveType: z.nativeEnum(DriveType),
  condition: z.nativeEnum(Condition),
  doors: z.number().int().min(2, "Cars having at least 2 doors"),
  seats: z.number().int(),
  airConditioning: z.nativeEnum(AirConditioning),
  horsePower: z.number().int(),
  engineType: z.nativeEnum(engineType),
  engineDisplacement: z.number().int(),
});
export type addNewCarType = z.infer<typeof addNewCarSchema>;
