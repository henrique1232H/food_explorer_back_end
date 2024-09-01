const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/index");
const migrationsRun = require("./database/sqlite/migrations");

migrationsRun();

const PORT = 3338;


app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
    console.log("Servidor funcionando")
})
