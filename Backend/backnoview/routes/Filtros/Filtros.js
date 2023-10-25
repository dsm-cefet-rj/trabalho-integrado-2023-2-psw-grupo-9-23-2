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