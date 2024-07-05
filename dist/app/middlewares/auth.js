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
exports.auth = void 0;
const user_model_1 = require("../modules/User/user.model");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const jwt_decode_1 = require("jwt-decode");
const auth = (...requiredRoles) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        //checking if the token is undefined
        if (!token) {
            throw new Error("Unauthorized Access");
        }
        const decoded = (0, jwt_decode_1.jwtDecode)(token);
        //checking if token is valid
        if (!decoded) {
            throw new Error("Unauthorized Access");
        }
        //checking if the token has expired
        if (decoded.exp) {
            const timeNow = Math.round(Date.now() / 1000);
            if (decoded.exp < timeNow) {
                throw new Error("Unauthorized Access");
            }
        }
        //verifying user from token data
        const user = yield user_model_1.User.findOne({ email: decoded.email });
        if (!user) {
            throw new Error("Unauthorized Access");
        }
        if (requiredRoles && !requiredRoles.includes(user.role)) {
            throw new Error("Unauthorized Access");
        }
        next();
    }));
};
exports.auth = auth;
