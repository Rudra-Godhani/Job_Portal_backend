/* eslint-disable no-undef */
import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;
    console.log("token-auth.js : ", token);
    
    if (!token) {
        return next(new ErrorHandler("user is not authenticated.", 400));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decoded);
    

    req.user = await User.findById(decoded.id);

    next();

})

export const isAuthorized = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`${req.user.role} is not allowed to access the resource.`, 400));
        }
        next();
    }
}