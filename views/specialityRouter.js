const specialityController = require("../controllers/specialityController");
const router = require("express").Router();


router.post("/specialities", specialityController.createSpeciality)
router.get("/specialities/:id", specialityController.getSpecialityById)


module.exports = router