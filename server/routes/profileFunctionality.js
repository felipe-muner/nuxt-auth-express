const express = require("express");
const router = express.Router();

const ProfileFunctionalityController = require("../controllers/ProfileFunctionalityController");

/* GET home page. */
router.get("/", ProfileFunctionalityController.getAll);

module.exports = router;
