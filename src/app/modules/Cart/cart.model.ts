import { Schema, model } from "mongoose";
import { TCart, TCartItem } from "./cart.interface";

const userCartItemSchema = new Schema<TCartItem>({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
  },
});

const userCartSchema = new Schema<TCart>({
  userEmail: {
    type: String,
    required: true,
  },
  cartItems: {
    type: [userCartItemSchema],
  },
});

export const Cart = model<TCart>("Cart", userCartSchema);
