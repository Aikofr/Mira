const models = require("../models");

const getbyProfil = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const fines = await models.fines.getFinesByProfil(id);
    res.status(201).json(fines[0]);
  } catch (error) {
    res.sendStatus(500);
  }
};

const updateFine = async (req, res) => {
  try {
    const fines = await models.fines.updateFine(req.body);
    res.status(201).json(fines[0]);
  } catch (error) {
    res.sendStatus(500);
  }
};

const deleteFine = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const fines = await models.fines.deleteFine(id);
    res.status(201).json(fines[0]);
  } catch (error) {
    res.sendStatus(500);
  }
};

const addFine = async (req, res) => {
  const tarif = parseInt(req.body.tarif, 10);
  try {
    await models.fines.addNewFine(req.body, tarif);
    res.status(201).json({ msg: "Amende ajoutée" });
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = {
  getbyProfil,
  updateFine,
  deleteFine,
  addFine,
};
