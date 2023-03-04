const router = require('express').Router();


const userRoutes = require("./views/userRoutes")
const authRoutes = require("./views/authRoutes");
const dentistRoutes = require("./views/dentistRoutes")
const pacientRoutes = require("./views/pacientRoutes")
const historyRoutes = require("./views/historyRoutes")
const rolRoutes = require("./views/rolRoutes")
const appointmentRoutes = require("./views/appointmentRoutes")
const treatmentRoutes = require("./views/treatmentRoutes")
const specialityRoutes = require("./views/specialityRouter")
const peymentRoutes = require("./views/paymentRoutes")


router.use('/',userRoutes)
router.use('/', authRoutes);
router.use('/',dentistRoutes)
router.use('/',pacientRoutes)
router.use('/',historyRoutes)
router.use('/',rolRoutes)
router.use('/',appointmentRoutes)
router.use('/',treatmentRoutes)
router.use('/',specialityRoutes)
router.use('/',peymentRoutes)



module.exports = router;