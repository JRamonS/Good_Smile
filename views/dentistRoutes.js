const dentistController = require("../controllers/dentistController");
const router = require("express").Router();


router.post("/dentists", dentistController.createDentist)
router.get("/dentists", dentistController.getDentist)
router.get("/dentists/:id", dentistController.getDentistById)
router.put("/dentists/:id", dentistController.putDentistById)
router.delete("/dentists/:id", dentistController.deleteDentistsById)

module.exports = router