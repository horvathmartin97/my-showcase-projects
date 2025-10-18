import { z } from "zod";

export const addNewCarSchema = z.object({
  carBrand: z.string().min(3, "Car Brand must be at least 3 character long"),
  carModel: z.string().min(2, "Car model must be at least 2 characters long"),
  builtYear: z.preprocess(
    (val) => (typeof val === "string" ? Number(val) : val),
    z.number().min(1980, "Invalid number")
  ),
  price: z.number().positive("Price must be a positive number"),
  currency: z.string().min(3, "Currency must be 3 chars long"),
  mileage: z.number().int().min(0),
  description: z.string().optional(),
  image: z
    .array(z.instanceof(File))
    .min(1, "Please upload at least one image.")
    .max(5, "You can upload up to 5 images only."),
  color: z.string(),
  transmission: z.string(),
  fuelType: z.string(),
  mileageValue: z.string(),
  bodyType: z.string(),
  driveType: z.string(),
  condition: z.string(),
  doors: z.number().int().min(2, "Cars having at least 2 doors"),
  seats: z.number().int(),
  airConditioning: z.string(),
  horsePower: z.number().int(),
  engineType: z.string(),
  engineDisplacement: z.number().int(),
  outDoorExtras: z.string().array(),
  indoorExtras: z.string().array(),
});
export type addNewCarType = z.infer<typeof addNewCarSchema>;
