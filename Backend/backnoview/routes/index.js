var express = require('express');
var router = express.Router();
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
    "isAntigo": true,
    "nome": "Fiat uno 1994",
    "imgLink": "public/Antigos/antigo3.PNG",
    "km": "800",
    "marca": "Ford",
    "valor": "30000",
    "id": 2
  }
];
router.route("/")
.get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(carros);
})

module.exports = router;
