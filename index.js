const express = require('express');
const db = require('./db/db');
const {Rol} = require ("./models/index");
const {User} = require ("./models/index");
const app = express();


app.use(express.json());

const PORT = 3000;

app.get("/rols", (req,res) =>{
    return res.send("Welcome to the aplication")
});

app.post("/rols", async (req,res) =>{

    const { privilege } = req.body;

    const newRol = {
        privilege: privilege
    }

    // Guardar la informacion
    const rol = await Rol.create(newRol)

    return res.json(rol)

});

app.get("/users", (req,res) =>{
    return res.send("Welcome to the app")
});

app.post("/users", async (req,res) =>{

    const { date } = req.body;

    const newUser = {
        date : date
    }

    // Guardar la informacion
    const user = await User.create(newUser)

    return res.json(user)

});










//Starting server
app.listen(PORT, () => console.log("Server on port " + PORT));
