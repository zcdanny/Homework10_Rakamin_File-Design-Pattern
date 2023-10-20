var express = require("express");
var router = express.Router();
var path = require("path");
const controllers = require("../controllers/controllers");
// const authMiddleware = require("../middleware/auth");

const multer = require("multer");

//call controller
router.get('/', controllers.users.getAll);
router.get('/:id', controllers.users.getOne);
router.post('/', controllers.users.create);
router.put('/:id', controllers.users.update);
router.delete('/:id', controllers.users.delete);



/* GET users listing. */

// router.get("/", authMiddleware.auth, userController.read);
// router.get("/:id", authMiddleware.auth, userController.readbyId);
// router.post(
//   "/",
//   authMiddleware.auth,
//   upload.single("picture"),
//   userController.signup
// );
// router.patch("/:id", authMiddleware.auth, userController.update);
// router.delete("/:id", authMiddleware.auth, userController.destroy);
// router.put("/upload");
// router.post("/signin", userController.signin);

module.exports = router;
