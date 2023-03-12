const express = require("express");
const {
  createUser,
  getUsers,
} = require("../Controllers/user.controller");
const router = express.Router();
router.route("/register").post(createUser);
router.route("/users").get(getUsers);
module.exports = router;
