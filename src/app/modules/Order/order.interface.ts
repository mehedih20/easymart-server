import { Types } from "mongoose";

export type TOrder = {
  email: string;
  productImg: string;
  productName: string;
  productQuantity: number;
  orderAddress: string;
  productId: Types.ObjectId;
  status: "shipped" | "pending";
};
