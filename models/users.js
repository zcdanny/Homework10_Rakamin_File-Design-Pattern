const Sequelize = require("sequelize");
const db = require("../config/postgresql");

// email, gender, password, role;
let users = db.define(
  "users",
  {
    email: Sequelize.STRING,
    gender: Sequelize.STRING,
    password: Sequelize.STRING,
    role: Sequelize.STRING,
  },
  {
    timestamps: false,
  }
);

module.exports = users;
