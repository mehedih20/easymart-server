import { Router } from "express";
import {
  addToCart,
  getCart,
  removeCart,
  removeCartItem,
} from "./cart.controller";
import validateData from "../../middlewares/validateData";
import { userCartItemValidationSchema } from "./cart.validation";
import { auth } from "../../middlewares/auth";

const router = Router();

router.post(
  "/cart/:email",
  auth("user"),
  validateData(userCartItemValidationSchema),
  addToCart
);

router.get("/cart/:email", auth("user"), getCart);
router.put("/cart/:email/:id", auth("user"), removeCartItem);
router.delete("/cart/:email/orderConfirmed", auth("user"), removeCart);

export const CartRouter = router;
