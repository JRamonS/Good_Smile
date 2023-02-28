const express = require('express');
//const userController = require('./controllers/userController');
const db = require('./db/db');
const {Rol} = require ("./models/index");
//const {User} = require ("./models/index");
// const {Dentist} = require ("./models/index");
// const {Pacient} = require ("./models/index");
// const {History} = require ("./models/index");
// const {Speciality} = require ("./models/index");
// const {Appointment} = require ("./models/index");
// const {Treatment} = require ("./models/index");
const {Payment} = require ("./models/index");

const app = express();
app.use(express.json());

const userRoutes = require("./views/userRoutes")
const authRoutes = require("./views/authRoutes")
const dentistRoutes = require("./views/dentistRoutes")
const pacientRoutes = require("./views/pacientRoutes")
const historyRoutes = require("./views/historyRoutes")
const rolRoutes = require("./views/rolRoutes")
const appointmentRoutes = require("./views/appointment")
const treatmentRoutes = require("./views/treatmentRoutes")
const specialityRoutes = require("./views/specialityRouter")
app.use(userRoutes)
app.use(authRoutes)
app.use(dentistRoutes)
app.use(pacientRoutes)
app.use(historyRoutes)
app.use(rolRoutes)
app.use(appointmentRoutes)
app.use(treatmentRoutes)
app.use(specialityRoutes)




const PORT = 3000;


app.get("/rols", (req,res) =>{
    return res.send("Welcome to the aplication")
});


//Endpoints user

app.get("/users", (req,res) =>{
    return res.send("Welcome to the app")
});


app.get("/dentists", (req,res) =>{
    return res.send("Welcome dentist")
});


//Endpoints pacients

app.get("/pacients", (req,res) =>{
    return res.send("Welcome pacient")
});

//Endpoints History

app.get("/histories", (req,res) =>{
    return res.send("A new history has been recorded")
});

//Endpoints Speciality

app.get("/Specialities", (req,res) =>{
    return res.send("Your Specialities is")
});



//Endpint Appointment

app.get("/appointments", (req,res) =>{
    return res.send("Your Appointment is")
});

app.get("/treatments", (req,res) =>{
    return res.send("Your treatment is")
});



app.get("/payments", (req,res) =>{
    return res.send("Your payment is")
});

app.post("/payments", async (req,res) =>{

    const {treatment_id,notes,date,amount,payment_method} = req.body;

    const newPayment = {
        treatment_id,
        notes : notes,
        date : date,
        amount: amount,
        payment_method : payment_method,
    }

    // Guardar la informacion
    const payment = await Payment.create(newPayment)

    return res.json(payment)

});

// //Starting server
// app.listen(PORT, () => console.log("Server on port " + PORT));

  db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message)); 
