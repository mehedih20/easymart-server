import { Router } from "express";
import { UserController } from "./user.controller";
import validateData from "../../middlewares/validateData";
import {
  userUpdateValidationSchema,
  userValidationSchema,
} from "./user.validation";
import { auth } from "../../middlewares/auth";

const router = Router();

router.post(
  "/users",
  validateData(userValidationSchema),
  UserController.createUser
);

router.get("/users", auth("admin", "owner"), UserController.getAllUsers);

router.get("/users/:email", UserController.getSingleUser);

router.put(
  "/users/:userId",
  // auth("admin", "owner", "user"),
  validateData(userUpdateValidationSchema),
  UserController.updateUser
);

router.put(
  "/user/change-role/:id",
  auth("owner"),
  UserController.changeUserRole
);

export const UserRouter = router;
