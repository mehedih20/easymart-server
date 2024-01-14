import { z } from "zod";

const userCartItemValidationSchema = z.object({
  productId: z.string(),
  productQuantity: z.number(),
});

export { userCartItemValidationSchema };
