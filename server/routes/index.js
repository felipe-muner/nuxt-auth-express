const express = require("express");
const router = express.Router();

const AuthenticationController = require("../controllers/AuthenticationController");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send({ msg: "ok" });
});

router.post("/login", AuthenticationController.login);

router.post("/register", AuthenticationController.register);

router.get("/user", AuthenticationController.verifyUser);

router.get("/logout", AuthenticationController.logout);

module.exports = router;
