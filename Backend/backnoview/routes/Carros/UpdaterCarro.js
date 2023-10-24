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
.put((req, res, next) =>{
    let car = carros.map(p => p.id).indexOf(req.params.id);
    carros.splice(car, 1, req.body);

    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.json(req.body);
}
)