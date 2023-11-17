var express = require('express');
var Filtros = require('../../Models/FiltroMod');
var router = express.Router();
const cors = require('../cors');

module.exports = router;

/* GET home page. */
router.route("/")
.options(cors.corsWithOptions, (req, res) => {res.sendStatus(200);})
.get(cors.corsWithOptions, (req, res, next) => {

  Filtros.find({})
  .then((filtrosBanco) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.json(filtrosBanco);

  }, (err) => next(err))
  .catch((err)=>next(err))
}
)
.post(cors.corsWithOptions, (req, res, next) => {
  Filtros.create(req.body)
  .then((filtrosBanco) => {
    console.log("Marca criada"+filtrosBanco);
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.json(filtrosBanco);

  }, (err) => next(err))
  .catch((err)=>next(err))
  
})
router.route("/:id")
.options(cors.corsWithOptions, (req, res) => {res.sendStatus(200);})
.delete(cors.corsWithOptions, (req, res, next) =>{  
  Filtros.findByIdAndDelete(req.params.id)//Na teoria, esse metodo e um outdated, e o mais correto seria usar o findByIdAndRemove
  .then((resp) => {//Na pratica, o Delete so funcionou com esse metodo
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.json(resp.id);

  }, (err) => next(err))
  .catch((err)=>next(err))
}
)
.put(cors.corsWithOptions, (req, res, next) =>{
 Filtros.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
 .then((resp) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(resp);

}, (err) => next(err))
.catch((err)=>next(err))
}
)