const historyController = require("../controllers/historyController");
const router = require("express").Router();


router.post("/histories", historyController.createHistory)


module.exports = router