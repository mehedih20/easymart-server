import { Router } from "express";
import {
  createOrders,
  deleteOrder,
  getAllOrders,
  getLastestThreeOrders,
  getSingleUserOrders,
  updateOrderStatus,
} from "./order.controller";
import { auth } from "../../middlewares/auth";

const router = Router();

router.get("/orders", auth("admin", "owner"), getAllOrders);

router.get("/orders/:email", auth("user"), getSingleUserOrders);

router.get(
  "/latest-orders/:email",
  auth("user", "admin", "owner"),
  getLastestThreeOrders
);

router.post("/orders", auth("user"), createOrders);

router.put("/orders/:id", auth("admin", "owner"), updateOrderStatus);

router.delete("/orders/:id", auth("user"), deleteOrder);

export const OrderRouter = router;
