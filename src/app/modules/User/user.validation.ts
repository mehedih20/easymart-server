import { z } from "zod";

const userValidationSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  role: z.enum(["user", "admin"]),
});

const userUpdateValidationSchema = z.object({
  name: z.string().optional(),
  address: z.string().optional(),
  phoneNumber: z.string().optional(),
  profilePicture: z.string().optional(),
});

export { userValidationSchema, userUpdateValidationSchema };
