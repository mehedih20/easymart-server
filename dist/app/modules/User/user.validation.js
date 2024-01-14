"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationSchema = void 0;
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    name: zod_1.z.string(),
    role: zod_1.z.enum(["user", "admin"]),
});
exports.userValidationSchema = userValidationSchema;
