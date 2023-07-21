const AbstractManager = require("./AbstractManager");

class AuthManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (email, password) values (?, ?)`,
      [user.email, user.password]
    );
  }

  findUser(email) {
    return this.database.query(
      `SELECT u.password, u.id, p.id as auth_id, p.firstname, p.lastname, p.role, p.picture FROM ${this.table} u JOIN profils p ON u.id = p.user_id WHERE u.email = ?;`,
      [email]
    );
  }
}

module.exports = AuthManager;
