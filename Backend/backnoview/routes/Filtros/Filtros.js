var express = require('express');
var router = express.Router();

module.exports = router;


let filtros= [
  {marca: "Ford", id: 1}
];

let actualId = filtros.length;
/* GET home page. */
router.route("/")
.get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(filtros);
})
.post((req, res, next) => {//CUD dos filtros
  actualId++;
  let proxId = actualId;


  filtros.push({...req.body, proxId});
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(filtros);
  
})
router.route("/:id")
.delete((req, res, next) =>{
  filtros = filtros.filter((c) => c.id != req.params.id);

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(filtros);
}
)
.put((req, res, next) =>{
  let f = filtros.map(p => p.id).indexOf(req.params.id);
  filtros.splice(f, 1, req.body);

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(req.body);
}
)