const express = require("express");
const app = express();
const errorMiddleware = require("./Middleware/error");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());

// Routes import
const user = require("./Routes/user.route");

app.use("/api", user);

// Middleware for Error handlers
app.use(errorMiddleware);

module.exports = app;
