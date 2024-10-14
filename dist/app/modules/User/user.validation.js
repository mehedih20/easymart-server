"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUpdateValidationSchema = exports.userValidationSchema = void 0;
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    name: zod_1.z.string(),
    role: zod_1.z.enum(["user", "admin"]),
});
exports.userValidationSchema = userValidationSchema;
const userUpdateValidationSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    address: zod_1.z.string().optional(),
    phoneNumber: zod_1.z.string().optional(),
    profilePicture: zod_1.z.string().optional(),
});
exports.userUpdateValidationSchema = userUpdateValidationSchema;
