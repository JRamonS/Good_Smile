const userController = require("../controllers/userController");
const isAdmin = require("../middlewares/isAdmin");
const verifyToken = require('../middlewares/verifyToken');
const router = require("express").Router();

// All available routes for the model User
router.post("/users",userController.createUser)
router.get("/users/admin", isAdmin, userController.getUser)
router.get("/users", verifyToken,userController.getUserById)
router.put("/users", verifyToken,userController.getUserById)
router.delete("/users", verifyToken, isAdmin, userController.deleteUserById)

module.exports = router