import { z } from "zod";

const userValidationSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  role: z.enum(["user", "admin"]),
});

export { userValidationSchema };
