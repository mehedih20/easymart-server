"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const routes_1 = require("./app/routes");
const app = (0, express_1.default)();
//Parsers
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Route
app.use(routes_1.BaseRouter);
app.get("/", (req, res) => {
    res.send("Easy mart server running!");
});
//Global error handler
app.use(globalErrorHandler_1.default);
exports.default = app;
