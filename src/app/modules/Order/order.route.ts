import { Router } from "express";
import {
  createOrders,
  deleteOrder,
  getAllOrders,
  getSingleUserOrders,
  updateOrderStatus,
} from "./order.controller";

const router = Router();

router.get("/orders", getAllOrders);
router.get("/orders/:email", getSingleUserOrders);
router.post("/orders", createOrders);
router.put("/orders/:id", updateOrderStatus);
router.delete("/orders/:id", deleteOrder);

export const OrderRouter = router;
