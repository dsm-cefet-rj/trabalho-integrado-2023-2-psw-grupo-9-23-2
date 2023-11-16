var express = require('express');
var router = express.Router();
const cors = require('../cors');
module.exports = router;

var Users = require('../../Models/UserMod');

/* GET home page. */
router.route("/")
.options(cors.corsWithOptions, (req, res) => {res.sendStatus(200);})
.get(cors.corsWithOptions, (req, res, next) => {
  Users.find({})
  .then((usersBanco) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    
    res.json(usersBanco);
    
  }, (err) => next(err))
  .catch((err)=>next(err))
})
.post(cors.corsWithOptions, (req, res, next)=>{
  Users.create({...req.body,carroRef: null})
  .then((usersBanco) => {
    console.log("Marca criada"+usersBanco);
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.json(usersBanco);

  }, (err) => next(err))
  .catch((err)=>next(err))
}
)
router.route("/:id")
.options(cors.corsWithOptions, (req, res) => {res.sendStatus(200);})
.delete(cors.corsWithOptions, (req, res, next) =>{
    Users.findByIdAndDelete(req.params.id)
    .then((resp) => {
      res.statusCode = 200;
      res.setHeader("Content-type", "application/json");
      res.json(resp.id);
  
    }, (err) => next(err))
    .catch((err)=>next(err))
}
)