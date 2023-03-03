const rolController = require("../controllers/rolController");
const router = require("express").Router();


router.post("/rols", rolController.createRol)
router.get("/rols/:id", rolController.getRolById)

module.exports = router