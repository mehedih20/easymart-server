"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = require("express");
const validateData_1 = __importDefault(require("../../middlewares/validateData"));
const product_controller_1 = require("./product.controller");
const product_validation_1 = require("./product.validation");
const auth_1 = require("../../middlewares/auth");
const router = (0, express_1.Router)();
router.get("/products", product_controller_1.getAllProducts);
router.get("/products/categories", product_controller_1.getProductCategories);
router.get("/products/:id", product_controller_1.getSingleProduct);
router.post("/create-product", (0, auth_1.auth)("admin", "owner"), (0, validateData_1.default)(product_validation_1.productValidationSchema), product_controller_1.createProduct);
router.put("/products/:id", (0, auth_1.auth)("admin", "owner"), (0, validateData_1.default)(product_validation_1.productValidationSchema), product_controller_1.updateProduct);
router.delete("/delete-product/:id", (0, auth_1.auth)("admin", "owner"), product_controller_1.deleteSingleProduct);
exports.ProductRouter = router;
