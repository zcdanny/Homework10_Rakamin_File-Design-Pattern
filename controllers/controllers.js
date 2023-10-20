const users = require('./user.controller');
const movies = require('./movie.controller');
const controller = {};

controller.users = users;
controller.movies = movies;
module.exports = controller