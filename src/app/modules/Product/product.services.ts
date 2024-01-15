import { TProduct } from "./product.interface";
import { Product } from "./product.model";

//Fetching all products
const getAllProductsFromDb = async (query: Record<string, unknown>) => {
  //Extracting query fields
  const {
    sortBy,
    limit = 12,
    page = 1,
    deal,
    sortOrder,
    categories,
    searchTerm,
  } = query;

  const skip = (Number(page) - 1) * Number(limit);

  // Formatting sort object
  const sortObj: any = {};
  const sortByField = ["name", "price", "rating"];

  if (sortBy && !sortOrder && sortByField.includes(sortBy as string)) {
    sortObj[sortBy as string] = "asc";
  } else if (sortOrder && sortBy) {
    sortObj[sortBy as string] = sortOrder;
  } else if (sortOrder && !sortBy) {
    sortObj.price = sortOrder;
  }

  // Formatting filter object
  const querObj: any = {};
  if (deal) querObj.deal = deal;
  if (categories) {
    const arr = (categories as string).split(",");
    querObj.category = { $in: arr };
  }
  if (searchTerm) {
    querObj.name = { $regex: searchTerm, $options: "i" };
  }

  // Making query to database and paginating
  const searchQuery = await Product.find(querObj)
    .sort(sortObj)
    .select("-__v")
    .skip(skip)
    .limit(Number(limit));

  // Making the meta data
  const metaData = {
    page: Number(page),
    limit: Number(limit),
    total: (await Product.find(querObj)).length,
  };

  return { meta: metaData, data: searchQuery };
};

//Fetching product categories
const getProductCategoriesFromDb = async () => {
  const result = await Product.distinct("category");
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
  getProductCategoriesFromDb,
  deleteSingleProductFromDb,
  createProductInDb,
  updateProductInDb,
};
