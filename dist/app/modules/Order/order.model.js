"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    productImg: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    productQuantity: {
        type: Number,
        required: true,
    },
    orderAddress: {
        type: String,
        required: true,
    },
    productId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    status: {
        type: String,
        enum: ["shipped", "pending"],
        required: true,
    },
});
exports.Order = (0, mongoose_1.model)("Order", orderSchema);
