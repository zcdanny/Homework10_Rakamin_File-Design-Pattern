const model = require("../models/index");
const controller = {};


controller.getAll = async function (req, res) {
  try {
    let movies = await model.movies.findAll();
    if (movies.length > 0) {
      res.status(200).json({
        message: "successfully Get all Movie data",
        data: movies,
      });
    } else {
      res.status(404).json({
        message: "Data not found",
        data: [],
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

controller.getOne = async function (req, res) {
  try {
    let movies = await model.movies.findAll({
      where: {
        id: req.params.id,
      },
    });
    if (movies.length > 0) {
      res.status(200).json({
        message: "Data movie founded",
        data: movies,
      });
    } else {
      res.status(200).json({
        message: "data movie not found",
        data: [],
      });
    }
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

controller.create = async function (req, res) {
    // console.log(req.file);
    
  try {
    let movies = await model.movies.create({
      title: req.body.title,
      genres: req.body.genres,
      year: req.body.year,
      photo: req.file.path,
    });
    res.status(201).json({
      message: "movie added",
      data: movies,
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

controller.update = async function (req, res) {
  try {
    let movies = await model.movies.update(
      {
        title: req.body.title,
        genres: req.body.genres,
        year: req.body.year,
        photo: req.file.path,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json({
      message: "movie data updated",
      data: movies,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

controller.delete = async function (req, res) {
  try {
    let movies = await model.movies.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "movie data deleted",
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

module.exports = controller;
