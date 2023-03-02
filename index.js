const express = require('express');
const db = require('./db/db');
require('dotenv').config();



const userRoutes = require("./views/userRoutes")
const authRoutes = require("./views/authRoutes")
const dentistRoutes = require("./views/dentistRoutes")
const pacientRoutes = require("./views/pacientRoutes")
const historyRoutes = require("./views/historyRoutes")
const rolRoutes = require("./views/rolRoutes")
const appointmentRoutes = require("./views/appointmentRoutes")
const treatmentRoutes = require("./views/treatmentRoutes")
const specialityRoutes = require("./views/specialityRouter")
const peymentRoutes = require("./views/paymentRoutes")

const app = express();

app.use(express.json());

app.use(userRoutes)
app.use(authRoutes)
app.use(dentistRoutes)
app.use(pacientRoutes)
app.use(historyRoutes)
app.use(rolRoutes)
app.use(appointmentRoutes)
app.use(treatmentRoutes)
app.use(specialityRoutes)
app.use(peymentRoutes)


const PORT = 3000;


app.get('/welcome', (req, res) => {
  return res.send("Bienvenido a mi app")
})

  db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message)); 
