import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import {
  addToCartInDb,
  getCartFromDb,
  removeCartFromDb,
  removeCartItemFromDb,
} from "./cart.services";

const addToCart = catchAsync(async (req, res) => {
  const { email } = req.params;
  const result = await addToCartInDb(email, req.body);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Item added to cart successfully",
    cartItem: result,
  });
});

const getCart = catchAsync(async (req, res) => {
  const { email } = req.params;
  const result = await getCartFromDb(email);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Cart fetched successfully",
    cart: result,
  });
});

const removeCartItem = catchAsync(async (req, res) => {
  const { email, id } = req.params;
  const result = await removeCartItemFromDb(email, id);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Cart updated successfully",
    cart: result,
  });
});

const removeCart = catchAsync(async (req, res) => {
  const { email } = req.params;
  const result = await removeCartFromDb(email);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Cart removed successfully",
    cart: result,
  });
});

export { addToCart, getCart, removeCartItem, removeCart };
