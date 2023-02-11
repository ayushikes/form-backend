const jwt = require("jsonwebtoken");
const User = require("../Models/user.model");
const ErrorHandler = require("../utils/error.handler");
const catchAsyncErrors = require("./catchAsyncErrors");

exports.isAuthUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  //   console.log(token);
  if (!token) {
    return next(new ErrorHandler("Please login to access this resource.", 401));
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id);
  next();
});
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    // console.log(req.user);
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role ${req.user.role} is not allowed  for this user`,
          403
        )
      );
    }
    next();
  };
};
