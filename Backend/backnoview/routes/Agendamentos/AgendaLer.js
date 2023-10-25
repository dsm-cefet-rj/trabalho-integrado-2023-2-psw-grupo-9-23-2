var express = require('express');
var router = express.Router();

module.exports = router;

let horarios= [
    {
        "isOcupado": true,
        "data": "12/09",
        "hora": "14:08",
        "id": 1
      },
      {
        "isOcupado": false,
        "dia": "02/10",
        "hora": "09:15",
        "id": 2
      },
      {
        "isOcupado": false,
        "dia": "02/10",
        "hora": "09:30",
        "id": 3
      },
      {
        "isOcupado": false,
        "dia": "09/10",
        "hora": "09:15",
        "id": 4
      },
];

/* GET home page. */
router.route("/")
.get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(horarios);
  
})