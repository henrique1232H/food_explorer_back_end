const authController = require("./auth.routes");
const express = require("express");

const routes = express();

routes.use("/auth", authController);

module.exports = routes