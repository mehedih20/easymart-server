import { Router } from "express";
import {
  changeUserRole,
  createUser,
  getAllUsers,
  getSingleUser,
} from "./user.controller";
import validateData from "../../middlewares/validateData";
import { userValidationSchema } from "./user.validation";
import { auth } from "../../middlewares/auth";

const router = Router();

router.post("/users", validateData(userValidationSchema), createUser);

router.get("/users", getAllUsers);

router.get("/users/:email", getSingleUser);

router.put("/user/change-role/:id", auth(), changeUserRole);

export const UserRouter = router;
