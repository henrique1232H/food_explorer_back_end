const express = require("express");

const routeAuth = express();

const AuthController = require("../controllers/authController");

const authController =  new AuthController()

routeAuth.post("/show", authController.show)
routeAuth.post("/", authController.create);

module.exports = routeAuth;