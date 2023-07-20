const models = require("../models");

const getAll = async (req, res) => {
  try {
    const profils = await models.profils.getAllProfils();
    res.status(201).json(profils[0]);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = {
  getAll,
};
