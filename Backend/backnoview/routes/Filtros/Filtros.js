var express = require('express');
var Filtros = require('../../Models/FiltroMod');
var router = express.Router();

module.exports = router;

/* GET home page. */
router.route("/")
.get((req, res, next) => {

  Filtros.find({})
  .then((filtrosBanco) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.json(filtrosBanco);

  }, (err) => next(err))
  .catch((err)=>next(err))
}
)
.post((req, res, next) => {
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
.delete((req, res, next) =>{
  
  Filtros.findByIdAndRemove(req.params.id)
  .then((resp) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.json(resp.id);

  }, (err) => next(err))
  .catch((err)=>next(err))
}
)
.put((req, res, next) =>{
  /*
  let f = filtros.map(p => p.id).indexOf(req.params.id);
  filtros.splice(f, 1, req.body);

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(req.body);
  */
 Filtros.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
 .then((resp) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(resp);

}, (err) => next(err))
.catch((err)=>next(err))
}
)