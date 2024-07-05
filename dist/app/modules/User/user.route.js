"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const validateData_1 = __importDefault(require("../../middlewares/validateData"));
const user_validation_1 = require("./user.validation");
const auth_1 = require("../../middlewares/auth");
const router = (0, express_1.Router)();
router.post("/users", (0, validateData_1.default)(user_validation_1.userValidationSchema), user_controller_1.createUser);
router.get("/users", (0, auth_1.auth)("admin", "owner"), user_controller_1.getAllUsers);
router.get("/users/:email", user_controller_1.getSingleUser);
router.put("/user/change-role/:id", (0, auth_1.auth)("owner"), user_controller_1.changeUserRole);
exports.UserRouter = router;
