const model = require("../models/index");
const controller = {};

controller.getAll = async function (req, res) {
  try {
    let users = await model.users.findAll();
    if (users.length > 0) {
      res.status(200).json({
        message: "successfully Get all data users",
        data: users,
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
    let users = await model.users.findAll({
      where: {
        id: req.params.id,
      },
    });
    if (users.length > 0) {
      res.status(200).json({
        message: "Data user founded",
        data: users,
      });
    } else {
      res.status(200).json({
        message: "data user not found",
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
  try {
    let users = await model.users.create({
      email: req.body.email,
      gender: req.body.gender,
      password: req.body.password,
      role: req.body.role,
    });
    res.status(201).json({
      message: "user added",
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

controller.update = async function (req, res) {
  try {
    let users = await model.users.update(
      {
        email: req.body.email,
        gender: req.body.gender,
        password: req.body.password,
        role: req.body.role,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json({
      message: "user updated",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
};

controller.delete = async function (req, res) {
  try {
    let users = await model.users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "user deleted",
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

module.exports = controller;
