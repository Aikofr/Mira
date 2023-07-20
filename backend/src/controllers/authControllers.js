const models = require("../models");

const signup = async (req, res) => {
  try {
    await models.auth.insert(req.body);
    res.status(201).json({ msg: "Compte créé, Merci de vous identifier." });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      res.status(409).json({ msg: "Email déjà existant." });
    } else {
      res.sendStatus(500);
    }
  }
};

module.exports = {
  signup,
};
