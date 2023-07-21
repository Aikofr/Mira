const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "amendes" });
  }

  getAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  getFinesByProfil(id) {
    return this.database.query(
      `SELECT a.*, p.firstname, p.lastname FROM ${this.table} as a INNER JOIN profils as p ON p.id = a.auth_id WHERE a.profil_id = ? ORDER BY id DESC`,
      [id]
    );
  }

  getFinesByAuth(id) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE auth_id = ?`,
      [id]
    );
  }

  updateFine(fine) {
    return this.database.query(
      `update ${this.table} set titre = ?, tarif = ?, description = ? WHERE id = ?`,
      [fine.titre, fine.tarif, fine.description, fine.id]
    );
  }

  addNewFine(fine, tarif) {
    return this.database.query(
      `INSERT INTO ${this.table} (titre, description, tarif, profil_id, auth_id) values (?, ?, ?, ?, ?)`,
      [fine.titre, fine.description, tarif, fine.profil_id, fine.auth_id]
    );
  }

  deleteFine(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = ItemManager;
