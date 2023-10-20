const Sequelize = require('sequelize');
const db = new Sequelize('movies-database', 'postgres', '123', {
    dialect : 'postgres',
    host : 'localhost'
})

module.exports = db;