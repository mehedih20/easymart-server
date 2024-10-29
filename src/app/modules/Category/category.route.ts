import { Router } from "express";
import { auth } from "../../middlewares/auth";
import validateData from "../../middlewares/validateData";
import { categoryValidationSchema } from "./category.validation";
import {
  addCategory,
  deleteCategory,
  getCategories,
} from "./category.controller";

const router = Router();

router.post(
  "/category",
  auth("admin", "owner"),
  validateData(categoryValidationSchema),
  addCategory
);

router.get("/categories", auth("admin", "owner"), getCategories);

router.delete("/category/:categoryId", auth("admin", "owner"), deleteCategory);

export const CategoryRouter = router;
