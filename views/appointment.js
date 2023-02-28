const appointmentController = require("../controllers/appointmentController");
const router = require("express").Router();


router.post("/appointments", appointmentController.createAppointment)
router.get("/appointments/:id", appointmentController.getAppointmentById)
router.put("/appointments/:id", appointmentController.putAppointmentById)
router.delete("/appointments/:id", appointmentController.deleteAppointmentById)


module.exports = router