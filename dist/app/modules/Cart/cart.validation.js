"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCartItemValidationSchema = void 0;
const zod_1 = require("zod");
const userCartItemValidationSchema = zod_1.z.object({
    productId: zod_1.z.string(),
    productQuantity: zod_1.z.number(),
});
exports.userCartItemValidationSchema = userCartItemValidationSchema;
