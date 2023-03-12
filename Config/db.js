const mongoose = require("mongoose");
const connect = () => {
  mongoose.connect(
    `mongodb+srv://ayush:ayush@cluster0.1rqfr.mongodb.net/ecommerce?retryWrites=true&w=majority`
  );
};
module.exports = connect;
