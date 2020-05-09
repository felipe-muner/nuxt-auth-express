const { Functionality } = require("../models");

module.exports = {
  async getAll(req, res) {
    try {
      console.log("to aqui functionalidade get all");
      const f = await Functionality.findAll();
      res.send(f);
    } catch (error) {
      console.log(error);
      console.log("error functionality getall");
      res.status(400).send({ error: error });
    }
  }
};
