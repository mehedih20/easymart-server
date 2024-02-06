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
exports.removeCartFromDb = exports.removeCartItemFromDb = exports.getCartFromDb = exports.addToCartInDb = void 0;
const cart_model_1 = require("./cart.model");
const addToCartInDb = (userEmail, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmailExists = yield cart_model_1.Cart.findOne({ userEmail });
    if (userEmailExists) {
        const result = yield cart_model_1.Cart.findOneAndUpdate({ userEmail }, { $push: { cartItems: payload } }, {
            new: true,
        });
        return result;
    }
    else {
        const newCart = {
            userEmail,
            cartItems: [payload],
        };
        const result = yield cart_model_1.Cart.create(newCart);
        return result;
    }
});
exports.addToCartInDb = addToCartInDb;
const getCartFromDb = (userEmail) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.findOne({ userEmail }).populate("cartItems.productId");
    return result;
});
exports.getCartFromDb = getCartFromDb;
const removeCartItemFromDb = (userEmail, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.findOneAndUpdate({ userEmail }, {
        $pull: {
            cartItems: {
                _id: id,
            },
        },
    }, {
        new: true,
    });
    return result;
});
exports.removeCartItemFromDb = removeCartItemFromDb;
const removeCartFromDb = (userEmail) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.deleteOne({ userEmail });
    return result;
});
exports.removeCartFromDb = removeCartFromDb;
