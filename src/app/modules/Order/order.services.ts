import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const getAllOrdersFromDb = async () => {
  const result = await Order.find().sort({ createdAt: 1 });
  return result;
};

const getSingleUserOrdersFromDb = async (email: string) => {
  const result = await Order.find({ email }).sort({ createdAt: 1 });
  return result;
};

const getLastestThreeOrdersFromDb = async (email: string) => {
  let result;
  if (email === "all") {
    result = await Order.find().sort({ createdAt: -1 }).limit(3);
  } else {
    result = await Order.find({ email }).sort({ createdAt: -1 }).limit(3);
  }

  return result;
};

const createOrdersInDb = async (payload: TOrder[]) => {
  const result = await Order.create(payload);
  return result;
};

const updateOrderStatusInDb = async (id: string) => {
  const result = await Order.findByIdAndUpdate(
    id,
    { status: "shipped" },
    { new: true }
  );
  return result;
};

const deleteOrderFromDb = async (id: string) => {
  const result = await Order.findByIdAndDelete(id);
  return result;
};

export {
  getAllOrdersFromDb,
  getSingleUserOrdersFromDb,
  getLastestThreeOrdersFromDb,
  createOrdersInDb,
  updateOrderStatusInDb,
  deleteOrderFromDb,
};
