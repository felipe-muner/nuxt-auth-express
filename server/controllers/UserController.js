const { User } = require("../models");
const jwt = require("jsonwebtoken");
const EmailController = require("./EmailController");

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: ONE_WEEK
  });
}

module.exports = {
  async recoverPassword(req, res) {
    try {
      const isUser = await User.findOne({ where: { email: req.body.email } });
      if (isUser) {
        console.log(isUser);
        // send e-mail
        EmailController.recoverPassword(req.body.email);
        res.send({
          isUser: isUser,
          msg: "We sent an e-mail to you. Check it there."
        });
      } else {
        console.log(isUser);
        //redireciona e exibe msg
        res.status(400).send({
          isUser: isUser,
          msg: "E-mail not found."
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  async getAll(req, res) {
    try {
      const users = await User.findAll();
      res.send(users);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: error });
    }
  },
  async register(req, res) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email: req.body.email },
        defaults: req.body
      });
      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error });
    }
  },

  verifyUser(req, res) {
    try {
      jwt.verify(
        req.headers.authorization.split(" ")[1],
        config.authentication.jwtSecret,
        function(err, decoded) {
          return res.send({ user: decoded });
        }
      );
    } catch (error) {
      return res.status(401).send({ error });
    }
  },

  logout(req, res) {
    res.send({ logout: true });
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(403).send({
          error: "The login information is incorrect. there is not user"
        });
      }

      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) return res.status(401).send({ token: null });

      const userJson = user.toJSON();
      res.send({
        token: jwtSignUser(userJson)
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        error: "An error has occured trying to log in."
      });
    }
  }
};
