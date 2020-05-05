const express = require("express");
const router = express.Router();

const SystemController = require("../controllers/SystemController");

/* GET home page. */
router.get("/", SystemController.getAll);

module.exports = router;
