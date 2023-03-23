const dentistController = require("../controllers/dentistController");
const isAdmin = require("../middlewares/isAdmin");
const isDentist = require("../middlewares/isDentist");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

// All available routes for the model Dentist
router.post("/dentists", verifyToken, isAdmin,dentistController.createDentist)
router.get("/dentists", verifyToken,isDentist, dentistController.getDentist)
router.put("/dentists/:id", verifyToken,isAdmin,dentistController.putDentistById)
router.delete("/dentists/:id",verifyToken, isAdmin,dentistController.deleteDentistsById)

module.exports = router