"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const validationErrorMessageGenerator = (err) => {
    let errorMessage = "";
    Object.values(err.errors).map((item) => {
        errorMessage += `${item.message} `;
    });
    return errorMessage;
};
const zodErrorMessageGenerator = (err) => {
    let errorMessage = "";
    err === null || err === void 0 ? void 0 : err.issues.map((item) => (errorMessage += `${item.path[item.path.length - 1]} is ${item.message.toLowerCase()}. `));
    return errorMessage;
};
const globalErrorHandler = (err, req, res, next) => {
    const statusCode = 500;
    let message = "Something went wrong";
    let errorMessage;
    let errorDetails;
    if (err instanceof zod_1.ZodError) {
        //zod error
        message = "Validation Error";
        errorMessage = zodErrorMessageGenerator(err);
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "CastError") {
        //cast error
        message = "Invalid ID";
        errorMessage = `${JSON.parse(err === null || err === void 0 ? void 0 : err.stringValue)} is not a valid ID!`;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "ValidationError") {
        //mongoose validation error
        message = "Validation Error";
        errorMessage = validationErrorMessageGenerator(err);
    }
    else if ((err === null || err === void 0 ? void 0 : err.code) === 11000) {
        //duplicate error
        message = "Duplicate key not allowed!";
        const extractingField = Object.keys(err.keyValue)[0];
        errorMessage = `${err === null || err === void 0 ? void 0 : err.keyValue[extractingField]} is a duplicate value`;
    }
    else if (err instanceof Error) {
        message = err.message;
        errorMessage = "";
    }
    return res.status(statusCode).json({
        success: false,
        message,
        errorMessage,
        errorDetails: err || errorDetails,
        stack: (err === null || err === void 0 ? void 0 : err.stack) || null,
    });
};
exports.default = globalErrorHandler;
