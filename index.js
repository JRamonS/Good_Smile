const express = require('express');
const db = require('./db/db');
const {Rol} = require ("./models/index");
const {User} = require ("./models/index");
const {Dentist} = require ("./models/index");
const {Pacient} = require ("./models/index");
const {History} = require ("./models/index");
const {Speciality} = require ("./models/index");
const {Appointment} = require ("./models/index");
const {Treatment} = require ("./models/index");
const {Payment} = require ("./models/index");
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


app.get('/dentists/:id', async (req, res) => {
    const dentistId = req.params.id;

    const dentist = await Dentist.findByPk(dentistId)

    return res.json(dentist);
})

app.put("/dentists/:id", async (req, res) =>{
    const dentistId = req.params.id
    const { name, surname, email, address,registration_number,phone } = req.body;
    const updateDentist = await Dentist.update({name:name,surname:surname,email:email,address:address,registration_number:registration_number,phone:phone}, {where:{id:dentistId}})
    return res.json(updateDentist)
})

// app.delete("/dentists/:id", async(req, res) => {
//     const dentistId = req.params.id
    
//     const deleteDentist = await Dentist.destroy({where: { id: dentistId}})

//     return res.json(deleteDentist);
// })

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

app.get('/pacients/:id', async (req, res) => {
    const pacientId = req.params.id;

    const pacient = await Pacient.findByPk(pacientId)

    return res.json(pacient);
})

app.put("/pacients/:id", async (req, res) =>{
    const pacientId = req.params.id
    const { name, surname, email, address,phone,date_of_birth,gender,postcode } = req.body;

    const updatePacient = await Pacient.update({name:name,surname:surname,email:email,address:address,phone:phone,date_of_birth:date_of_birth,gender:gender,postcode:postcode}, {where:{id:pacientId}})
    return res.json(updatePacient)
})

// app.delete("/pacients/:id", async(req, res) => {
//     const pacientId = req.params.id
    
//     const deletePacient = await Pacient.destroy({where: { id: pacientId}})

//     return res.json(deletePacient);
// })

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

app.post("/appointments", async (req,res) =>{

    const {hour,status,observations,date} = req.body;

    const newAppointment = {
        hour : hour,
       status : status,
       observations : observations,
       date : date
    }

    // Guardar la informacion
    const appointment = await Appointment.create(newAppointment)

    return res.json(appointment)

});

app.get('/appointments/:id', async (req, res) => {
    const appointmentId = req.params.id;

    const appointment = await Appointment.findByPk(appointmentId)

    return res.json(appointment);
})

app.put("/appointments/:id", async (req, res) =>{
    const appointmentId = req.params.id

    const {hour,status,observations,date} = req.body;
    const updateAppointment = await Appointment.update({hour:hour,status:status,observations:observations,date:date}, {where:{id:appointmentId}})
    return res.json(updateAppointment)
})

<<<<<<< HEAD
app.delete("/appointments/:id", async(req, res) => {
    const appointmentId = req.params.id
    
    const deleteAppointment = await Appointment.destroy({where: { id: appointmentId}})

    return res.json(deleteAppointment);
})
=======
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

    const {notes,date,amount,payment_method} = req.body;

    const newPayment = {
        notes : notes,
        date : date,
        amount: amount,
        payment_method : payment_method,
    }

    // Guardar la informacion
    const payment = await Payment.create(newPayment)

    return res.json(payment)

});

>>>>>>> b7a75c41eb77b3be1873d74641018aca782301b8

//Starting server
app.listen(PORT, () => console.log("Server on port " + PORT));

  
