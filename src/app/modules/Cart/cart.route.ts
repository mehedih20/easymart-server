import { Router } from "express";
import {
  addToCart,
  getCart,
  removeCart,
  removeCartItem,
} from "./cart.controller";
import validateData from "../../middlewares/validateData";
import { userCartItemValidationSchema } from "./cart.validation";

const router = Router();

router.post(
  "/cart/:email",
  validateData(userCartItemValidationSchema),
  addToCart
);

router.get("/cart/:email", getCart);
router.put("/cart/:email/:id", removeCartItem);
router.delete("/cart/:email/orderConfirmed", removeCart);

export const CartRouter = router;
