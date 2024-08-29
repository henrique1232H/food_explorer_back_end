const express = require("express");

const routeAuth = express();

const AuthController = require("../controllers/authController");

const authController =  new AuthController()

routeAuth.get("/", authController.show)
routeAuth.post("/create", authController.create);
routeAuth.put("/update", authController.update)

module.exports = routeAuth; 