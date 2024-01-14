import { z } from "zod";

const productValidationSchema = z.object({
  category: z.string(),
  name: z.string(),
  imgUrl: z.string(),
  price: z.number(),
  oldPrice: z.number(),
  rating: z
    .number()
    .min(1, { message: "to be equal or greater than 1" })
    .max(5, { message: "to be equal or less than 5" }),
  deal: z.enum(["Hot", "New", "Sale"]),
});

export { productValidationSchema };
