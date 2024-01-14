"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const catchAsync = (func) => {
    return (req, res, next) => {
        Promise.resolve(func(req, res, next)).catch((err) => {
            // Handling user already exist
            if (err.message === "User already exist!") {
                res.status(http_status_1.default.BAD_REQUEST).json({
                    success: false,
                    message: err.message,
                    data: null,
                });
            }
            next(err);
        });
    };
};
exports.default = catchAsync;
