const paymentController = require("../controllers/paymentController");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();


router.post("/payments", verifyToken,paymentController.createPayment)
router.get("/payments/:id", verifyToken,paymentController.getPaymentById)


module.exports = router