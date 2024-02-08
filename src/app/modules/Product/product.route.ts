import { Router } from "express";
import validateData from "../../middlewares/validateData";
import {
  createProduct,
  deleteSingleProduct,
  getAllProducts,
  getProductCategories,
  getSingleProduct,
  updateProduct,
} from "./product.controller";
import { productValidationSchema } from "./product.validation";
import { auth } from "../../middlewares/auth";

const router = Router();

router.get("/products", getAllProducts);
router.get("/products/categories", getProductCategories);
router.get("/products/:id", getSingleProduct);
router.post(
  "/create-product",
  auth(),
  validateData(productValidationSchema),
  createProduct
);
router.put(
  "/products/:id",
  auth(),
  validateData(productValidationSchema),
  updateProduct
);
router.delete("/delete-product/:id", auth(), deleteSingleProduct);

export const ProductRouter = router;
