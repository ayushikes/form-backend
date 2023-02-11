const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connect = () => {
  mongoose.connect(
    `mongodb+srv://ayush:ayush@cluster0.1rqfr.mongodb.net/unacademy?retryWrites=true&w=majority`
  );
};
module.exports = connect;
