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
exports.UserController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const user_services_1 = require("./user.services");
const createUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const result = yield user_services_1.UserServices.createUserInDb(req.body);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "User created successfully",
        users: result,
    });
}));
const getAllUsers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_services_1.UserServices.getAllUsersFromDb();
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Users retrieved successfully",
        users: result,
    });
}));
const getSingleUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_services_1.UserServices.getSingleUserFromDb(req.params.email);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "User retrieved successfully",
        user: result,
    });
}));
const updateUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield user_services_1.UserServices.updateUserInDb(userId, req.body);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "User updated successfully",
        user: result,
    });
}));
const changeUserRole = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield user_services_1.UserServices.changeUserRoleInDb(id, req.body);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "User role changed successfully",
        user: result,
    });
}));
exports.UserController = {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    changeUserRole,
};
