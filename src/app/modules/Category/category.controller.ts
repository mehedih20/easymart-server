import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import {
  addCategoryInDb,
  deleteCategoryFromDb,
  getCategoriesFromDb,
} from "./category.services";

const addCategory = catchAsync(async (req, res) => {
  const result = await addCategoryInDb(req.body);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Category added successfully",
    result,
  });
});

const getCategories = catchAsync(async (req, res) => {
  const result = await getCategoriesFromDb();

  res.status(httpStatus.OK).json({
    success: true,
    message: "Categories added successfully",
    categories: result,
  });
});

const deleteCategory = catchAsync(async (req, res) => {
  const { categoryId } = req.params;
  const result = await deleteCategoryFromDb(categoryId);

  let customMessage;
  if (!result) {
    customMessage =
      "Can't delete category! Product with the category already exists.";
  } else {
    customMessage = "Category deleted successfully";
  }

  res.status(httpStatus.OK).json({
    success: true,
    message: customMessage,
    result,
  });
});

export { addCategory, getCategories, deleteCategory };
