var express = require('express');
var router = express.Router();

module.exports = router;

let horarios= [
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
];

/* GET home page. */
router.route("/")
.get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(horarios);
})