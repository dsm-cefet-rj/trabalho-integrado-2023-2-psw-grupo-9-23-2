var express = require('express');
const Images = require("../../Models/UploadMod");
const multer = require("multer");
var router = express.Router();
const cors = require('../cors');

module.exports = router;


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../frontend/public/Antigos");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

/* GET home page. */
router.route("/")
.options(cors.corsWithOptions, (req, res) => {res.sendStatus(200);})
.get(cors.corsWithOptions, (req, res, next) => {

    Images.find({})
    .then((filtrosBanco) => {
      res.statusCode = 200;
      res.setHeader("Content-type", "application/json");
      res.json(filtrosBanco);
  
    }, (err) => next(err))
    .catch((err)=>next(err))
  }
  )
.post(cors.corsWithOptions, upload.single("image"), async (req, res) => {
  console.log(req.body);
  const imageName ="/Antigos/"+ req.file.filename;

  try {
    await Images.create({ image: imageName });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});