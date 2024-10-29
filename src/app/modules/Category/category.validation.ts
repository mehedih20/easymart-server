import { z } from "zod";

const categoryValidationSchema = z.object({
  categoryName: z.string(),
});

export { categoryValidationSchema };
