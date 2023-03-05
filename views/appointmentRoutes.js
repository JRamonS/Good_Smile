const appointmentController = require("../controllers/appointmentController");
const isAdmin = require("../middlewares/isAdmin");
const isDentist = require("../middlewares/isDentist");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();


router.post("/appointments", verifyToken,appointmentController.createAppointment)
router.get("/appointments", verifyToken,isAdmin,appointmentController.getAppointment)
router.get("/appointments/:id", verifyToken, appointmentController.getAppointmentById)
router.put("/appointments/:id", verifyToken, appointmentController.putAppointmentById)
router.delete("/appointments/:id", verifyToken,appointmentController.deleteAppointmentById)


module.exports = router