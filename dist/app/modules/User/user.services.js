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
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeUserRoleInDb = exports.createUserInDb = exports.getSingleUserFromDb = exports.getAllUsersFromDb = void 0;
const user_model_1 = require("./user.model");
const createUserInDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.checkUserExists(payload.email);
    if (user) {
        throw new Error("User already exist!");
    }
    const result = yield user_model_1.User.create(payload);
    return result;
});
exports.createUserInDb = createUserInDb;
const getAllUsersFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find();
    return result;
});
exports.getAllUsersFromDb = getAllUsersFromDb;
const getSingleUserFromDb = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find({
        email,
    });
    return result;
});
exports.getSingleUserFromDb = getSingleUserFromDb;
const changeUserRoleInDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
exports.changeUserRoleInDb = changeUserRoleInDb;
