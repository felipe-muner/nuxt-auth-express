const { Functionality } = require("../models");

module.exports = {
  async getAll(req, res) {
    try {
      console.log("to aqui functionalidade get all");
      const functionalities = await Functionality.findAll();
      res.send(functionalities);
    } catch (error) {
      console.log(error);
      console.log("error functionalities getall");
      res.status(400).send({ error: error });
    }
  }
};
