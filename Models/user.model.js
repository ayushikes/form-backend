const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email address"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone number"],
  }, 
  birthDate: {
    type: String,
    required: [true, "Please enter your birth date"],
  },
});


module.exports = mongoose.model("User", userSchema);
