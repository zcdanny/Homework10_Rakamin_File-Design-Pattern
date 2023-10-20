const Sequelize = require("sequelize");
const db = require("../config/postgresql");

// title, generes, year, photo
let movies = db.define(
  "movies",
  {
    title: Sequelize.STRING,
    genres: Sequelize.STRING,
    year: Sequelize.STRING,
    photo: Sequelize.STRING,
  },
  {
    timestamps: false,
  }
);

module.exports = movies;
