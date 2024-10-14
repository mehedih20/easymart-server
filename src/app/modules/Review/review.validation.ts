import { z } from "zod";

const reviewValidationSchema = z.object({
  productId: z.string(),
  userEmail: z.string().email(),
  username: z.string(),
  rating: z
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5"),
  comment: z.string(),
});

export { reviewValidationSchema };
