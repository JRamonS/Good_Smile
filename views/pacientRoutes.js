const pacientController = require("../controllers/pacientController");
const isAdmin = require("../middlewares/isAdmin");
const isDentist = require("../middlewares/isDentist");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

// All available routes for the model Pacient
router.post("/pacients", verifyToken,pacientController.createPacient)
router.get("/pacients", verifyToken, isDentist,pacientController.getPacient)
router.get("/pacients/:id", verifyToken,pacientController.getPacientById)
router.put("/pacients/:id", verifyToken,pacientController.putPacientById)
router.delete("/pacients/:id", verifyToken,isAdmin, pacientController.deletePacientById)


module.exports = router