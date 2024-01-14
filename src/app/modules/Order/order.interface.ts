import { Types } from "mongoose";

export type TOrder = {
  email: string;
  productImg: string;
  productName: string;
  productQuantity: number;
  productId: Types.ObjectId;
  status: "shipped" | "pending";
};
