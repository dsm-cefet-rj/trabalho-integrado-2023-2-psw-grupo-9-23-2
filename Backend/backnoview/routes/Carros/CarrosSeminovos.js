var express = require('express');
var router = express.Router();

module.exports = router;

let carros= [
  {
    "isAntigo": true,
    "nome": "Fusca 1994",
    "imgLink": "public/Antigos/antigo1.PNG",
    "km": "800",
    "marca": "Ford",
    "valor": "30000",
    "id": 1
  },
  {
    "isAntigo": false,
    "nome": "Fiat uno 1994",
    "imgLink": "public/Antigos/antigo3.PNG",
    "km": "800",
    "marca": "Ford",
    "valor": "30000",
    "id": 2
  }
];
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
  let antigos = carros.filter((m)=>m.isAntigo===false);
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json([filtros, antigos]);
  
})