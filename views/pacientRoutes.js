const pacientController = require("../controllers/pacientController");
const isAdmin = require("../middlewares/isAdmin");
const isDentist = require("../middlewares/isDentist");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();


router.post("/pacients", pacientController.createPacient)
router.get("/pacients", isAdmin, pacientController.getPacient)
router.get("/pacients/:id", pacientController.getPacientById)
router.put("/pacients/:id", pacientController.putPacientById)
router.delete("/pacients/:id", pacientController.deletePacientById)


module.exports = router