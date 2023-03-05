const specialityController = require("../controllers/specialityController");
const isAdmin = require("../middlewares/isAdmin");
const isDentist = require("../middlewares/isDentist");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

// All available routes for the model Speciality
router.post("/specialities", verifyToken,isAdmin,specialityController.createSpeciality)
router.get("/specialities/:id", verifyToken,isDentist,specialityController.getSpecialityById)


module.exports = router