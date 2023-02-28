const userController = require("../controllers/userController");
const router = require("express").Router();


router.post("/users", userController.createUser)
router.get("/users/:id", userController.getUserById)

module.exports = router