import { z } from "zod";

const orderValidationSchema = z.object({
  email: z.string().email(),
  productImg: z.string(),
  productName: z.string(),
  orderAddress: z.string(),
  productQuantity: z.number(),
  productId: z.string(),
  status: z.enum(["shipped", "pending"]),
});

const orderArrayValidationSchema = z.array(orderValidationSchema);

export { orderValidationSchema, orderArrayValidationSchema };
