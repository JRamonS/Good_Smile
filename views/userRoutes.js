const userController = require("../controllers/userController");
const verifyToken = require('../middlewares/verifyToken');
const router = require("express").Router();


router.post("/users", verifyToken,userController.createUser)
router.get("/users/:id", userController.getUserById)
router.put("/users/:id", userController.getUserById)
router.delete("/users/:id", verifyToken,userController.deleteUserById)

module.exports = router