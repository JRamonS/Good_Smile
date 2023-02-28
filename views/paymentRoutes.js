const paymentController = require("../controllers/paymentController");
const router = require("express").Router();


router.post("/payments", paymentController.createPayment)
router.get("/payments/:id", paymentController.getPaymentById)


module.exports = router