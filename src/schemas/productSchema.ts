import { z } from "zod";

export const productBodySchema = z.object({
  name: z.string().min(1),
  price: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => val >= 0, {
      message: "Price must be a non-negative number",
    }),
});

export const productQuerySchema = z.object({
  sortBy: z.enum(["name", "age"]).optional(),
  page: z
    .string()
    .transform(Number)
    .refine((val) => val > 0, { message: "Page must be greater than 0" })
    .optional(),
  limit: z
    .string()
    .transform(Number)
    .refine((val) => val > 0, { message: "Limit must be greater than 0" })
    .optional(),
});

export const productParamsSchema = z.object({
  id: z
    .string()
    .transform(Number)
    .refine((val) => val > 0, { message: "ID must be greater than 0" }),
});
