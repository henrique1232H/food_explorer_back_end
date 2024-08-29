const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/index");
const migrationsRun = require("./database/sqlite/migrations");

migrationsRun()

app.use(express.json());
const PORT = 3338;

app.use(routes);

app.use(cors())

app.listen(PORT, () => {
    console.log("Servidor funcionando")
})
