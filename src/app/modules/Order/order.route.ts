import { Router } from "express";
import {
  createOrders,
  deleteOrder,
  getAllOrders,
  getSingleUserOrders,
  updateOrderStatus,
} from "./order.controller";
import { auth } from "../../middlewares/auth";

const router = Router();

router.get("/orders", auth("admin", "owner"), getAllOrders);

router.get("/orders/:email", auth("user"), getSingleUserOrders);

router.post("/orders", auth("user"), createOrders);

router.put("/orders/:id", auth("admin", "owner"), updateOrderStatus);

router.delete("/orders/:id", auth("user"), deleteOrder);

export const OrderRouter = router;
