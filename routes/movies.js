var express = require("express");
var router = express.Router();

const controllers = require("../controllers/controllers");


const multer = require("multer");
//?multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images"); //?tempat meletakan file
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
//?end multer

//call controller
router.get('/', controllers.movies.getAll);
router.get('/:id', controllers.movies.getOne);
router.post('/', upload.single('photo'), controllers.movies.create);
router.put('/:id', upload.single('photo'), controllers.movies.update);
router.delete('/:id', controllers.movies.delete);



module.exports = router;
