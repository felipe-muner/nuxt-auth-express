const express = require("express");
const router = express.Router();

const FunctionalityController = require("../controllers/FunctionalityController");

/* GET home page. */
router.get("/", FunctionalityController.getAll);

module.exports = router;
