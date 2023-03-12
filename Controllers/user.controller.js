const User = require("../Models/user.model");

exports.createUser = async (req, res, next) => {
  const { name, email, phone, birthDate } = req.body;
  const user = await User.create({
    name,
    email,
    phone,
    birthDate,
  });
  res.status(200).json({
    success: true,
    user,
  });};

// Logout User

exports.getUsers = async (req, res, next) => {
  const user = await User.find();
  res.status(200).json({
    success: true,
    user,
  });
};
