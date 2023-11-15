var express = require('express');
var router = express.Router();
const cors = require('../cors');
module.exports = router;

var Carros = require('../../Models/CarroMod');

router.route("/")
.options(cors.corsWithOptions, (req, res) => {res.sendStatus(200);})
.get(cors.corsWithOptions, (req, res, next) => {
  Carros.find({})
  .then((carrosBanco) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.json(carrosBanco);

  }, (err) => next(err))
  .catch((err)=>next(err))
  
})
.post(cors.corsWithOptions, (req, res, next)=>{
  Carros.create(req.body)
  .then((carrosBanco) => {
    console.log("Marca criada"+carrosBanco);
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.json(carrosBanco);

  }, (err) => next(err))
  .catch((err)=>next(err))
}
)

router.route("/:id")
.options(cors.corsWithOptions, (req, res) => {res.sendStatus(200);})
.delete(cors.corsWithOptions, (req, res, next) =>{
    Carros.findByIdAndDelete(req.params.id)
    .then((resp) => {
      res.statusCode = 200;
      res.setHeader("Content-type", "application/json");
      res.json(resp.id);
  
    }, (err) => next(err))
    .catch((err)=>next(err))
}
)
.put(cors.corsWithOptions, (req, res, next) =>{
  Carros.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
  .then((resp) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(resp);

  }, (err) => next(err))
  .catch((err)=>next(err))
}
)