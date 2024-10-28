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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.createProduct = exports.deleteSingleProduct = exports.getLatestThreeProducts = exports.getSingleProduct = exports.getProductCategories = exports.getAllProducts = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const product_services_1 = require("./product.services");
const getAllProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, product_services_1.getAllProductsFromDb)(req.query);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Products retrieved successfully",
        products: result,
    });
}));
exports.getAllProducts = getAllProducts;
const getProductCategories = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, product_services_1.getProductCategoriesFromDb)();
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Product categories successfully",
        categories: result,
    });
}));
exports.getProductCategories = getProductCategories;
const getSingleProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield (0, product_services_1.getSingleProductFromDb)(id);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Product retrieved successfully",
        product: result,
    });
}));
exports.getSingleProduct = getSingleProduct;
const getLatestThreeProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, product_services_1.getLatestThreeProductsFromDb)();
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Latest products retrieved successfully",
        product: result,
    });
}));
exports.getLatestThreeProducts = getLatestThreeProducts;
const createProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, product_services_1.createProductInDb)(req.body);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Product created successfully",
        product: result,
    });
}));
exports.createProduct = createProduct;
const updateProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield (0, product_services_1.updateProductInDb)(id, req.body);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Product updated successfully",
        product: result,
    });
}));
exports.updateProduct = updateProduct;
const deleteSingleProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield (0, product_services_1.deleteSingleProductFromDb)(id);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Product deleted successfully",
        data: result,
    });
}));
exports.deleteSingleProduct = deleteSingleProduct;
