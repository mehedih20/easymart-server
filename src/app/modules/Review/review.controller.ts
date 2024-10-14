import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { ReviewServices } from "./review.services";

const addProductReview = catchAsync(async (req, res) => {
  const result = await ReviewServices.addProductReviewInDB(req.body);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Product review created successfully",
    data: result,
  });
});

const getProductReviews = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await ReviewServices.getProductReviewsFromDB(productId);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Product reviews fetched successfully",
    reviews: result,
  });
});

export const ReviewController = {
  addProductReview,
  getProductReviews,
};
