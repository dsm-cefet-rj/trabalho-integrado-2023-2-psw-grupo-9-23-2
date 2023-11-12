var express = require('express');
var router = express.Router();
const cors = require('../cors');
module.exports = router;

var Carros = require('../../Models/CarroMod');
/*let carros= [
  {
    "isAntigo": true,
    "nome": "Fusca 1994",
    "imgLink": "/Antigos/antigo1.PNG",
    "km": "800",
    "marca": "Ford",
    "valor": "30000",
    "id": 1
  },
  {
    "isAntigo": false,
    "nome": "Fiat uno 1994",
    "imgLink": "/Antigos/antigo3.PNG",
    "km": "800",
    "marca": "Fiat",
    "valor": "30000",
    "id": 2
  },
  {
    "isAntigo": false,
    "nome": "Ford Fiesta 1994",
    "imgLink": "/Antigos/antigo1.PNG",
    "km": "800",
    "marca": "Ford",
    "valor": "52000",
    "id": 3
  }
];*/

router.route("/")
.options(cors.corsWithOptions, (req, res) => {res.sendStatus(200);})
.get(cors.corsWithOptions, (req, res, next) => {
  /*
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(carros);
  */
  Carros.find({})
  .then((carrosBanco) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.json(carrosBanco);

  }, (err) => next(err))
  .catch((err)=>next(err))
  
})
.post(cors.corsWithOptions, (req, res, next)=>{
  /*
  let proxId = carros.length + 1;
  let carroAdd = {...req.body, proxId};
  carros.push(carroAdd);

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(carros);
  */
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
  /*
    carros = carros.filter((c) => c.id != req.params.id);

    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.json(carros);
    */
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
  /*
    let car = carros.map(p => p.id).indexOf(req.params.id);
    carros.splice(car, 1, req.body);

    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.json(req.body);
*/
  Carros.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
  .then((resp) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(resp);

  }, (err) => next(err))
  .catch((err)=>next(err))
}
)