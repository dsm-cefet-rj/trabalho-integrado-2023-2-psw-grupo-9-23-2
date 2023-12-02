var express = require('express');
var router = express.Router();
const cors = require('../cors');
module.exports = router;

var Agendas = require('../../Models/AgendaMod');

/* GET home page. */
router.route("/")
.options(cors.corsWithOptions, (req, res) => {res.sendStatus(200);})
.get(cors.corsWithOptions, (req, res, next) => {
  Agendas.find({})
  .then((agendasBanco) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    
    res.json(agendasBanco);
    
  }, (err) => next(err))
  .catch((err)=>next(err))
})
.post(cors.corsWithOptions, (req, res, next)=>{
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
.put(cors.corsWithOptions, (req, res, next) =>{
  Agendas.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
  .then((resp) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(resp);

  }, (err) => next(err))
  .catch((err)=>next(err))
}
)