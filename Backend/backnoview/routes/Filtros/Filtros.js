var express = require('express');
var router = express.Router();

module.exports = router;

let filtros= [
  {marca: "Fiat"},
  {marca: "Ford"},
  {marca: "Peugeot"},
  {marca: "Renault"},
  {marca: "Volkswagen"},
  {marca: "Jeep"}
];
/* GET home page. */
router.route("/")
.get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(filtros);
})
.post((req, res, next) => {//CUD dos filtros
  filtros.push(req.body);
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(filtros);
  
})
.delete((req, res, next) =>{
  filtros = filtros.filter((c) => c.nome != req.params.nome);

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(filtros);
}
)
.put((req, res, next) =>{
  let filtro = filtros.map(p => p.nome).indexOf(req.params.nome);
  filtros.splice(filtro, 1, req.body);

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(req.body, filtros);
}
)