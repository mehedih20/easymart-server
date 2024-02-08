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

router.get("/orders", auth(), getAllOrders);
router.get("/orders/:email", auth(), getSingleUserOrders);
router.post("/orders", auth(), createOrders);
router.put("/orders/:id", auth(), updateOrderStatus);
router.delete("/orders/:id", auth(), deleteOrder);

export const OrderRouter = router;
