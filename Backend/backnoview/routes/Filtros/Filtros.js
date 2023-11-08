var express = require('express');
const Filtros = require('../../Models/FiltroMod');
var router = express.Router();

module.exports = router;


let filtros= [
  {marca: "Ford", id: 1}
];

let actualId = filtros.length;
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
  Filtros.findByIdAndRemove({_id: req.params.id})
  .then((resp) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.json(resp.id);

  }, (err) => next(err))
  .catch((err)=>next(err))
}
)
.put((req, res, next) =>{
  let f = filtros.map(p => p.id).indexOf(req.params.id);
  filtros.splice(f, 1, req.body);

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(req.body);
}
)