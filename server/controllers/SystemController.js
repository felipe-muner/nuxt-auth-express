const { System } = require("../models");

module.exports = {
  async getAll(req, res) {
    try {
      const systems = await System.findAll();
      res.send(systems);
    } catch (error) {
      console.log(error);
      console.log("error system getall");
      res.status(400).send({ error: error });
    }
  }
};
