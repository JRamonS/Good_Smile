
const authController = require("../controllers/authController");

const router = require("express").Router()
// All available routes for the authenticate
router.post("/login", authController.login);

module.exports = router