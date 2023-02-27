const pacientController = require("../controllers/pacientController");
const router = require("express").Router();


router.post("/pacients", pacientController.createPacient)
router.get("/pacients/:id", pacientController.getPacienttById)
router.put("/pacients/:id", pacientController.putPacientById)
router.delete("/pacients/:id", pacientController.deletePacientsById)


module.exports = router