const express = require('express');
//const userController = require('./controllers/userController');
const db = require('./db/db');
const {Rol} = require ("./models/index");
//const {User} = require ("./models/index");
// const {Dentist} = require ("./models/index");
// const {Pacient} = require ("./models/index");
const {History} = require ("./models/index");
const {Speciality} = require ("./models/index");
const {Appointment} = require ("./models/index");
const {Treatment} = require ("./models/index");
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
app.use(userRoutes)
app.use(authRoutes)
app.use(dentistRoutes)
app.use(pacientRoutes)
app.use(historyRoutes)
app.use(rolRoutes)
app.use(appointmentRoutes)




const PORT = 3000;

//Endpoints rol

app.get("/rols", (req,res) =>{
    return res.send("Welcome to the aplication")
});

app.post("/rols", async (req,res) =>{

    

   

    // Guardar la informacion
   

    

});

//Endpoints user

app.get("/users", (req,res) =>{
    return res.send("Welcome to the app")
});

//app.post("/users", userController.createUser) 



//Endpoints dentist

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

app.post("/Specialities", async (req,res) =>{

    const { name, description} = req.body;

    const newSpeciality = {
        name : name,
       description : description
    }

    // Guardar la informacion
    const speciality = await Speciality.create(newSpeciality)

    return res.json(speciality)

});

//Endpint Appointment

app.get("/appointments", (req,res) =>{
    return res.send("Your Appointment is")
});



app.get('/appointments/:id', async (req, res) => {
    

    

    
})

app.put("/appointments/:id", async (req, res) =>{
    

    
    
    
})


app.delete("/appointments/:id", async(req, res) => {
    
    
    

    
})


//Endpoint Treatment

app.get("/treatments", (req,res) =>{
    return res.send("Your treatment is")
});

app.post("/treatments", async (req,res) =>{

    const {name,duration,price,description,date,session_num,status} = req.body;

    const newTreatment = {
        name : name,
        duration : duration,
        price : price,
        description : description,
        date : date,
        session_num : session_num,
        status: status

    }

    // Guardar la informacion
    const treatment = await Treatment.create(newTreatment)

    return res.json(treatment)

});

//Endpoint Treatment

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
