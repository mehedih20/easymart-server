import { Router } from "express";
import validateData from "../../middlewares/validateData";
import { auth } from "../../middlewares/auth";
import { reviewValidationSchema } from "./review.validation";
import { ReviewController } from "./review.controller";

const router = Router();

router.post(
  "/product-review",
  auth("user"),
  validateData(reviewValidationSchema),
  ReviewController.addProductReview
);

router.get("/product-reviews/:productId", ReviewController.getProductReviews);

export const ReviewRouter = router;
