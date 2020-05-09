const { ProfileFunctionality } = require("../models");

module.exports = {
  async getAll(req, res) {
    try {
      console.log("to aqui ProfileFunctionality get all");
      const pf = await ProfileFunctionality.findAll();
      res.send(pf);
    } catch (error) {
      console.log(error);
      console.log("error ProfileFunctionality getall");
      res.status(400).send({ error: error });
    }
  },
  async getProfileFunctionality(req, res) {
    try {
      return [];
    } catch (error) {
      console.log(error);
      console.log("error ProfileFunctionality getall");
      res.status(400).send({ error: error });
    }
  }
};
