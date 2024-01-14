"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRouter = void 0;
const express_1 = require("express");
const cart_controller_1 = require("./cart.controller");
const validateData_1 = __importDefault(require("../../middlewares/validateData"));
const cart_validation_1 = require("./cart.validation");
const router = (0, express_1.Router)();
router.post("/cart/:email", (0, validateData_1.default)(cart_validation_1.userCartItemValidationSchema), cart_controller_1.addToCart);
router.get("/cart/:email", cart_controller_1.getCart);
router.put("/cart/:email/:id", cart_controller_1.removeCartItem);
router.delete("/cart/:email/orderConfirmed", cart_controller_1.removeCart);
exports.CartRouter = router;
