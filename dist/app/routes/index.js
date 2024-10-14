"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRouter = void 0;
const express_1 = require("express");
const product_route_1 = require("../modules/Product/product.route");
const user_route_1 = require("../modules/User/user.route");
const order_route_1 = require("../modules/Order/order.route");
const cart_route_1 = require("../modules/Cart/cart.route");
const review_route_1 = require("../modules/Review/review.route");
const router = (0, express_1.Router)();
const allRouters = [
    product_route_1.ProductRouter,
    user_route_1.UserRouter,
    order_route_1.OrderRouter,
    cart_route_1.CartRouter,
    review_route_1.ReviewRouter,
];
allRouters.forEach((route) => router.use(route));
exports.BaseRouter = router;
