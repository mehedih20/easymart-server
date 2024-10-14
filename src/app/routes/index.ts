import { Router } from "express";
import { ProductRouter } from "../modules/Product/product.route";
import { UserRouter } from "../modules/User/user.route";
import { OrderRouter } from "../modules/Order/order.route";
import { CartRouter } from "../modules/Cart/cart.route";
import { ReviewRouter } from "../modules/Review/review.route";

const router = Router();

const allRouters = [
  ProductRouter,
  UserRouter,
  OrderRouter,
  CartRouter,
  ReviewRouter,
];

allRouters.forEach((route) => router.use(route));

export const BaseRouter = router;
