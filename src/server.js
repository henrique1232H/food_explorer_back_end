const express = require("express");
const app = express();

const PORT = 3336;
app.use(express.json())

app.listen(PORT, () => {
    console.log("Servidor funcionando")
})
