const rolController = require("../controllers/rolController");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

// All available routes for the model Rol
router.post("/rols",verifyToken ,rolController.createRol)
router.get("/rols/:id", verifyToken,rolController.getRolById)

module.exports = router