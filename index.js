const express = require("express");
const app = express();
app.use(express.json());

// Routes import
const user = require("./Routes/user.route");

app.use("/api", user);

module.exports = app;
