import { Product } from "../Product/product.model";
import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const addCategoryInDb = async (payload: TCategory) => {
  const result = await Category.create(payload);

  return result;
};

const getCategoriesFromDb = async () => {
  const result = await Category.find({}).select("-__v -updatedAt -createdAt");

  return result;
};

const deleteCategoryFromDb = async (categoryId: string) => {
  const category = await Category.findById(categoryId);

  const isProductWithCategoryExists = await Product.findOne({
    category: category?.categoryName,
  });

  if (isProductWithCategoryExists) {
    return false;
  }

  const result = await Category.findByIdAndDelete(categoryId);

  return result;
};

export { addCategoryInDb, getCategoriesFromDb, deleteCategoryFromDb };
