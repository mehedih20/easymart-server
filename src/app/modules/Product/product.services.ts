import { TProduct } from "./product.interface";
import { Product } from "./product.model";

//Fetching all products
const getAllProductsFromDb = async () => {
  const result = await Product.find();
  return result;
};

//Fetching single product
const getSingleProductFromDb = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

//Creating a product
const createProductInDb = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

//Update a product
const updateProductInDb = async (id: string, payload: TProduct) => {
  const result = await Product.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

//Removing single product
const deleteSingleProductFromDb = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export {
  getAllProductsFromDb,
  getSingleProductFromDb,
  deleteSingleProductFromDb,
  createProductInDb,
  updateProductInDb,
};
