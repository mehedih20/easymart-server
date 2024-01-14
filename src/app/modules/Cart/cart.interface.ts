import { Types } from "mongoose";

export type TCartItem = {
  productId: Types.ObjectId;
  productQuantity: number;
};

export type TCart = {
  userEmail: string;
  cartItems: TCartItem[];
};
