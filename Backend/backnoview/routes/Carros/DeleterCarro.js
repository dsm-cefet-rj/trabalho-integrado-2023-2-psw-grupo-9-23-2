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
/* GET home page. */
router.route("/")
.get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(carros);
})

router.route("/:id")
.delete((req, res, next) =>{
    carros = carros.filter((c) => c.id != req.params.id);

    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.json(carros);
}
)