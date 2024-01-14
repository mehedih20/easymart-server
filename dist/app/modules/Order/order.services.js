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
exports.deleteOrderFromDb = exports.updateOrderStatusInDb = exports.createOrdersInDb = exports.getSingleUserOrdersFromDb = exports.getAllOrdersFromDb = void 0;
const order_model_1 = require("./order.model");
const getAllOrdersFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find();
    return result;
});
exports.getAllOrdersFromDb = getAllOrdersFromDb;
const getSingleUserOrdersFromDb = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find({ email });
    return result;
});
exports.getSingleUserOrdersFromDb = getSingleUserOrdersFromDb;
const createOrdersInDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.create(payload);
    return result;
});
exports.createOrdersInDb = createOrdersInDb;
const updateOrderStatusInDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.findByIdAndUpdate(id, { status: "shipped" }, { new: true });
    return result;
});
exports.updateOrderStatusInDb = updateOrderStatusInDb;
const deleteOrderFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.findByIdAndDelete(id);
    return result;
});
exports.deleteOrderFromDb = deleteOrderFromDb;
