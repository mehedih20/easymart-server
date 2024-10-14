import { TReview } from "./review.interface";
import { Review } from "./review.model";

const addProductReviewInDB = async (payload: TReview) => {
  const result = await Review.create(payload);

  return result;
};

const getProductReviewsFromDB = async (productId: string) => {
  const result = await Review.find({
    productId,
  });
  return result;
};

export const ReviewServices = {
  addProductReviewInDB,
  getProductReviewsFromDB,
};
