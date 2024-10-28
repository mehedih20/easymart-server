import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import {
  createProductInDb,
  deleteSingleProductFromDb,
  getAllProductsFromDb,
  getLatestThreeProductsFromDb,
  getProductCategoriesFromDb,
  getSingleProductFromDb,
  updateProductInDb,
} from "./product.services";

const getAllProducts = catchAsync(async (req, res) => {
  const result = await getAllProductsFromDb(req.query);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Products retrieved successfully",
    products: result,
  });
});

const getProductCategories = catchAsync(async (req, res) => {
  const result = await getProductCategoriesFromDb();

  res.status(httpStatus.OK).json({
    success: true,
    message: "Product categories successfully",
    categories: result,
  });
});
const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleProductFromDb(id);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Product retrieved successfully",
    product: result,
  });
});

const getLatestThreeProducts = catchAsync(async (req, res) => {
  const result = await getLatestThreeProductsFromDb();

  res.status(httpStatus.OK).json({
    success: true,
    message: "Latest products retrieved successfully",
    product: result,
  });
});

const createProduct = catchAsync(async (req, res) => {
  const result = await createProductInDb(req.body);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Product created successfully",
    product: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await updateProductInDb(id, req.body);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Product updated successfully",
    product: result,
  });
});

const deleteSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteSingleProductFromDb(id);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Product deleted successfully",
    data: result,
  });
});

export {
  getAllProducts,
  getProductCategories,
  getSingleProduct,
  getLatestThreeProducts,
  deleteSingleProduct,
  createProduct,
  updateProduct,
};
