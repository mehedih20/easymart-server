"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductInDb = exports.createProductInDb = exports.deleteSingleProductFromDb = exports.getProductCategoriesFromDb = exports.getSingleProductFromDb = exports.getAllProductsFromDb = void 0;
const product_model_1 = require("./product.model");
//Fetching all products
const getAllProductsFromDb = (query) => __awaiter(void 0, void 0, void 0, function* () {
    //Extracting query fields
    const { sortBy, limit = 12, page = 1, deal, sortOrder, categories } = query;
    const skip = (Number(page) - 1) * Number(limit);
    // Formatting sort object
    const sortObj = {};
    const sortByField = ["name", "price", "rating"];
    if (sortBy && !sortOrder && sortByField.includes(sortBy)) {
        sortObj[sortBy] = "asc";
    }
    else if (sortOrder && sortBy) {
        sortObj[sortBy] = sortOrder;
    }
    else if (sortOrder && !sortBy) {
        sortObj.price = sortOrder;
    }
    // Formatting filter object
    const querObj = {};
    if (deal)
        querObj.deal = deal;
    if (categories) {
        const arr = categories.split(",");
        querObj.category = { $in: arr };
    }
    // Making query to database and paginating
    const searchQuery = yield product_model_1.Product.find(querObj)
        .sort(sortObj)
        .select("-__v")
        .skip(skip)
        .limit(Number(limit));
    // Making the meta data
    const metaData = {
        page: Number(page),
        limit: Number(limit),
        total: (yield product_model_1.Product.find(querObj)).length,
    };
    return { meta: metaData, data: searchQuery };
});
exports.getAllProductsFromDb = getAllProductsFromDb;
//Fetching product categories
const getProductCategoriesFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.distinct("category");
    return result;
});
exports.getProductCategoriesFromDb = getProductCategoriesFromDb;
//Fetching single product
const getSingleProductFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(id);
    return result;
});
exports.getSingleProductFromDb = getSingleProductFromDb;
//Creating a product
const createProductInDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payload);
    return result;
});
exports.createProductInDb = createProductInDb;
//Update a product
const updateProductInDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
exports.updateProductInDb = updateProductInDb;
//Removing single product
const deleteSingleProductFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndDelete(id);
    return result;
});
exports.deleteSingleProductFromDb = deleteSingleProductFromDb;
