"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
const userCartItemSchema = new mongoose_1.Schema({
    productId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    productQuantity: {
        type: Number,
        required: true,
    },
}, {
    _id: false,
});
const userCartSchema = new mongoose_1.Schema({
    userEmail: {
        type: String,
        required: true,
    },
    cartItems: {
        type: [userCartItemSchema],
    },
});
exports.Cart = (0, mongoose_1.model)("Cart", userCartSchema);
