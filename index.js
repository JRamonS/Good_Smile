const express = require('express');
const db = require('./db/db');
const {Rol} = require ("./models/index");
const {User} = require ("./models/index");
const {Dentist} = require ("./models/index");
const {Pacient} = require ("./models/index");
const {History} = require ("./models/index");
const app = express();


app.use(express.json());

const PORT = 3000;

//Endpoints rol

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

//Endpoints user

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

//Endpoints dentist

app.get("/dentists", (req,res) =>{
    return res.send("Welcome dentist")
});

app.post("/dentists", async (req,res) =>{

    const { name, surname, email, address,registration_number,phone } = req.body;

    const newDentist = {
        name : name,
        surname : surname,
        email : email,
        address : address,
        registration_number : registration_number,
        phone : phone
    }

    // Guardar la informacion
    const dentist = await Dentist.create(newDentist)

    return res.json(dentist)

});

app.put("/dentists/:id", async (req, res) =>{
    const dentistId = req.params.id
    const name = req.body.name
    const updateDentist = await Dentist.update({name:name}, {where:{id:dentistId}})
    return res.json(updateDentist)
})

//Endpoints pacients

app.get("/pacients", (req,res) =>{
    return res.send("Welcome pacient")
});

app.post("/pacients", async (req,res) =>{

    const { name, surname, email, address,phone,date_of_birth,gender,postcode } = req.body;

    const newPacient = {
        name : name,
        surname : surname,
        email : email,
        address : address,
        phone : phone,
        date_of_birth : date_of_birth,
        gender : gender,
        postcode : postcode
    }

    // Guardar la informacion
    const pacient = await Pacient.create(newPacient)

    return res.json(pacient)

});

//Endpoints History

app.get("/histories", (req,res) =>{
    return res.send("A new history has been recorded")
});

app.post("/histories", async (req,res) =>{

    const { date, observation } = req.body;

    const newHistory = {
        date : date,
        observation : observation
    }

    // Guardar la informacion
    const history = await History.create(newHistory)

    return res.json(history)

});









//Starting server
app.listen(PORT, () => console.log("Server on port " + PORT));
