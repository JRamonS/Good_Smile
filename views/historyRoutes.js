const historyController = require("../controllers/historyController");
const isDentist = require("../middlewares/isDentist");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

// All available routes for the model History
router.post("/histories", verifyToken,historyController.createHistory)
router.get("/histories/:id", verifyToken,historyController.getHistorytById)
router.put("/histories/:id", verifyToken,isDentist, historyController.putHistoryById)


module.exports = router