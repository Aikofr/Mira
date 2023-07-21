const AbstractManager = require("./AbstractManager");

class ProfilsManager extends AbstractManager {
  constructor() {
    super({ table: "profils" });
  }

  getAllProfils() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  getOneProfil(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }
}

module.exports = ProfilsManager;
