const express = require("express");
const router = express.Router();

const UserAccessController = require("../controllers/UserAccessController");

/* GET home page. */
router.get("/", UserAccessController.getAll);

module.exports = router;
