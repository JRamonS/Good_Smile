const treatmentController = require("../controllers/treatmentController");
const isDentist = require("../middlewares/isDentist");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();


router.post("/treatments", verifyToken, isDentist, treatmentController.createTreatment)
router.get("/treatments/:id", verifyToken, isDentist,treatmentController.getTreatmentById)
router.put("/treatments/:id", verifyToken, isDentist,treatmentController.putTreatmentById)



module.exports = router