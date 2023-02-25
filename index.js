const express = require('express');
const db = require('./db/db');
const {Rol} = require ("./models/index");
const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/users", (req,res) =>{
    return res.send("Vemos los usuarios")
})

app.post("/rols", async (req,res) =>{

    const { privilege } = req.body;

    const newRol = {
        privilege: privilege
    }

    // Guardar la informacion
    const rol = await Rol.create(newRol)

    return res.json(rol)

})










//Starting server
app.listen(PORT, () => console.log("Server on port " + PORT));
