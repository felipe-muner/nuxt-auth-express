var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send({ msg: "ok" });
});

router.post("/login");

router.post("/register");

module.exports = router;
