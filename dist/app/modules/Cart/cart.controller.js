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
exports.removeCart = exports.removeCartItem = exports.getCart = exports.addToCart = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const cart_services_1 = require("./cart.services");
const addToCart = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    const result = yield (0, cart_services_1.addToCartInDb)(email, req.body);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Item added to cart successfully",
        cartItem: result,
    });
}));
exports.addToCart = addToCart;
const getCart = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    const result = yield (0, cart_services_1.getCartFromDb)(email);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Cart fetched successfully",
        cart: result,
    });
}));
exports.getCart = getCart;
const removeCartItem = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, id } = req.params;
    const result = yield (0, cart_services_1.removeCartItemFromDb)(email, id);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Cart item removed successfully",
        cart: result,
    });
}));
exports.removeCartItem = removeCartItem;
const removeCart = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    const result = yield (0, cart_services_1.removeCartFromDb)(email);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Cart removed successfully",
        cart: result,
    });
}));
exports.removeCart = removeCart;
