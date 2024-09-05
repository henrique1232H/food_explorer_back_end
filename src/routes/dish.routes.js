const express = require("express")
const routeDish = express();

const dishController = require("../controllers/dishController");
const DishController = new dishController();

routeDish.post("/:id", DishController.create);
routeDish.get("/", DishController.show);
routeDish.patch("/:id", DishController.update);
routeDish.delete("/:id", DishController.remove)


module.exports = routeDish
