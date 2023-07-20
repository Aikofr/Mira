const models = require("../models");

const getAll = async (req, res) => {
  try {
    const news = await models.news.get();
    res.status(201).json(news[0]);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAll,
};
