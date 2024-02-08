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
  auth(),
  validateData(userCartItemValidationSchema),
  addToCart
);

router.get("/cart/:email", auth(), getCart);
router.put("/cart/:email/:id", auth(), removeCartItem);
router.delete("/cart/:email/orderConfirmed", auth(), removeCart);

export const CartRouter = router;
