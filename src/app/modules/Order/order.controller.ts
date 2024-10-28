import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import {
  createOrdersInDb,
  deleteOrderFromDb,
  getAllOrdersFromDb,
  getLastestThreeOrdersFromDb,
  getSingleUserOrdersFromDb,
  updateOrderStatusInDb,
} from "./order.services";

const getAllOrders = catchAsync(async (req, res) => {
  const result = await getAllOrdersFromDb();

  res.status(httpStatus.OK).json({
    success: true,
    message: "Orders retrieved successfully",
    orders: result,
  });
});

const getSingleUserOrders = catchAsync(async (req, res) => {
  const { email } = req.params;
  const result = await getSingleUserOrdersFromDb(email);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Orders retrieved successfully",
    orders: result,
  });
});

const getLastestThreeOrders = catchAsync(async (req, res) => {
  const { email } = req.params;
  const result = await getLastestThreeOrdersFromDb(email);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Orders retrieved successfully",
    orders: result,
  });
});

const createOrders = catchAsync(async (req, res) => {
  const result = await createOrdersInDb(req.body);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Orders created successfully",
    orders: result,
  });
});

const updateOrderStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await updateOrderStatusInDb(id);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Order status updated successfully",
    order: result,
  });
});

const deleteOrder = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteOrderFromDb(id);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Order deleted successfully",
    order: result,
  });
});

export {
  getAllOrders,
  getSingleUserOrders,
  getLastestThreeOrders,
  createOrders,
  updateOrderStatus,
  deleteOrder,
};
