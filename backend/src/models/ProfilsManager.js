const AbstractManager = require("./AbstractManager");

class ProfilsManager extends AbstractManager {
  constructor() {
    super({ table: "profils" });
  }

  getAllProfils() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }
}

module.exports = ProfilsManager;
