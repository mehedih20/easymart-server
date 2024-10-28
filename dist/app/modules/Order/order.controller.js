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
exports.deleteOrder = exports.updateOrderStatus = exports.createOrders = exports.getLastestThreeOrders = exports.getSingleUserOrders = exports.getAllOrders = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const order_services_1 = require("./order.services");
const getAllOrders = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, order_services_1.getAllOrdersFromDb)();
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Orders retrieved successfully",
        orders: result,
    });
}));
exports.getAllOrders = getAllOrders;
const getSingleUserOrders = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    const result = yield (0, order_services_1.getSingleUserOrdersFromDb)(email);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Orders retrieved successfully",
        orders: result,
    });
}));
exports.getSingleUserOrders = getSingleUserOrders;
const getLastestThreeOrders = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    const result = yield (0, order_services_1.getLastestThreeOrdersFromDb)(email);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Orders retrieved successfully",
        orders: result,
    });
}));
exports.getLastestThreeOrders = getLastestThreeOrders;
const createOrders = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, order_services_1.createOrdersInDb)(req.body);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Orders created successfully",
        orders: result,
    });
}));
exports.createOrders = createOrders;
const updateOrderStatus = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield (0, order_services_1.updateOrderStatusInDb)(id);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Order status updated successfully",
        order: result,
    });
}));
exports.updateOrderStatus = updateOrderStatus;
const deleteOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield (0, order_services_1.deleteOrderFromDb)(id);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Order deleted successfully",
        order: result,
    });
}));
exports.deleteOrder = deleteOrder;
