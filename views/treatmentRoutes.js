const tretmentController = require("../controllers/treatmentController");
const router = require("express").Router();


router.post("/treatments", tretmentController.createTreatment)
router.get("/treatments/:id", tretmentController.getTreatmentById)



module.exports = router