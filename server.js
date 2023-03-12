const app = require("./index");
const dotenv = require("dotenv");
const connect = require("./Config/db");

// console.log(first);
dotenv.config({ path: "Config/config.env" });

connect();
app.listen(process.env.PORT || 3002, () => {
  console.log("Server listening on port " + process.env.PORT);
});
