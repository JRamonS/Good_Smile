const historyController = require("../controllers/historyController");
const router = require("express").Router();


router.post("/histories", historyController.createHistory)
router.get("/histories/:id", historyController.getHistorytById)


module.exports = router