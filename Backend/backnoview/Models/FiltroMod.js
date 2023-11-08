const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//const normalize = require('normalize-mongoose');

const filtroSchema = new Schema({
    marca: {
        type: String,
        required: true
    }
})

//filtroSchema.plugin(normalize);
var Filtros = mongoose.model("Filtros", filtroSchema)

module.exports = Filtros;