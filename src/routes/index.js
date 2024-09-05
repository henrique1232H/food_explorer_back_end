const authController = require("./auth.routes");
const dishController = require("./dish.routes");

const express = require("express");

const routes = express();

routes.use("/auth", authController);
routes.use("/dish", dishController);

module.exports = routes