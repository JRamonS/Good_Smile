const rolController = require("../controllers/rolController");
const isAdmin = require("../middlewares/isAdmin");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

// All available routes for the model Rol
router.put("/rols/:id",verifyToken, isAdmin, rolController.updateRol)
router.get("/rols/admin", verifyToken, isAdmin, rolController.getRolById)

module.exports = router