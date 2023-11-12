var express = require('express');
var router = express.Router();
const cors = require('../cors');
module.exports = router;

var Agendas = require('../../Models/AgendaMod');
/*let horarios= [
    {
        "isOcupado": true,
        "data": "02/01",
        "hora": "14:08",
        "id": 1
      },
      {
        "isOcupado": true,
        "data": "29/11",
        "hora": "09:15",
        "id": 2
      },
      {
        "isOcupado": true,
        "data": "09/03",
        "hora": "09:30",
        "id": 3
      },
      {
        "isOcupado": false,
        "data": "23/08",
        "hora": "09:15",
        "id": 4
      },
];*/

/* GET home page. */
router.route("/")
.options(cors.corsWithOptions, (req, res) => {res.sendStatus(200);})
.get(cors.corsWithOptions, (req, res, next) => {
  /*
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(horarios);
  */
  Agendas.find({})
  .then((agendasBanco) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.json(agendasBanco);

  }, (err) => next(err))
  .catch((err)=>next(err))
})
.post(cors.corsWithOptions, (req, res, next)=>{
  /*
  let proxId = "Ho" + (horarios.length + 1);
  let horAdd = {...req.body, proxId};
  horarios.push(horAdd);

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(horarios);
  */
  Agendas.create({...req.body,carroRef: null})
  .then((agendasBanco) => {
    console.log("Marca criada"+agendasBanco);
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.json(agendasBanco);

  }, (err) => next(err))
  .catch((err)=>next(err))
}
)
router.route("/:id")
.options(cors.corsWithOptions, (req, res) => {res.sendStatus(200);})
.delete(cors.corsWithOptions, (req, res, next) =>{
    Agendas.findByIdAndDelete(req.params.id)
    .then((resp) => {
      res.statusCode = 200;
      res.setHeader("Content-type", "application/json");
      res.json(resp.id);
  
    }, (err) => next(err))
    .catch((err)=>next(err))
}
)