const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "news" });
  }

  get() {
    return this.database.query(`SELECT * FROM ${this.table} ORDER BY id DESC`);
  }
}

module.exports = ItemManager;
