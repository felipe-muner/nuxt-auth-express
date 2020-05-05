const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send({ msg: "ok" });
});

router.post("/login", UserController.login);

router.post("/register", UserController.register);

router.get("/user", UserController.verifyUser);

router.get("/logout", UserController.logout);

module.exports = router;
