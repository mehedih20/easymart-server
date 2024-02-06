"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderArrayValidationSchema = exports.orderValidationSchema = void 0;
const zod_1 = require("zod");
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    productImg: zod_1.z.string(),
    productName: zod_1.z.string(),
    orderAddress: zod_1.z.string(),
    productQuantity: zod_1.z.number(),
    productId: zod_1.z.string(),
    status: zod_1.z.enum(["shipped", "pending"]),
});
exports.orderValidationSchema = orderValidationSchema;
const orderArrayValidationSchema = zod_1.z.array(orderValidationSchema);
exports.orderArrayValidationSchema = orderArrayValidationSchema;
