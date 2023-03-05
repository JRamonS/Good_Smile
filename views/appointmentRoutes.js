const appointmentController = require("../controllers/appointmentController");
const isDentist = require("../middlewares/isDentist");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();


router.post("/appointments", verifyToken,appointmentController.createAppointment)
router.get("/appointments", verifyToken,isDentist,appointmentController.getAppointment)
router.get("/appointments/:id", verifyToken,appointmentController.getAppointmentById)
router.put("/appointments/:id", verifyToken,appointmentController.putAppointmentById)
router.delete("/appointments/:id", verifyToken,appointmentController.deleteAppointmentById)


module.exports = router