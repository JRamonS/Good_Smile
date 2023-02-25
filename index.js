const express = require('express');
const db = require('./db/db');


const app = express();

app.get("/users", (req,res) =>{
    return res.send("Vemos los usuarios")
})

app.use(express.json());

const PORT = 3000;

//Starting server
app.listen(PORT, () => console.log("Server on port " + PORT));
