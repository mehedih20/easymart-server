"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidationSchema = void 0;
const zod_1 = require("zod");
const productValidationSchema = zod_1.z.object({
    category: zod_1.z.string(),
    name: zod_1.z.string(),
    imgUrl: zod_1.z.string(),
    price: zod_1.z.number(),
    oldPrice: zod_1.z.number(),
    rating: zod_1.z
        .number()
        .min(1, { message: "to be equal or greater than 1" })
        .max(5, { message: "to be equal or less than 5" }),
    deal: zod_1.z.enum(["Hot", "New", "Sale"]),
});
exports.productValidationSchema = productValidationSchema;
