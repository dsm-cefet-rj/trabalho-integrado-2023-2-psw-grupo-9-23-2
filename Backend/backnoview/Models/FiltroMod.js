const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//var normalize = require('normalize-mongoose');

const filtroSchema = new Schema({
    marca: {
        type: String,
        required: true
    }
    
})//.plugin(normalize);

//filtroSchema.plugin(normalize);
var Filtros = mongoose.model("Filtros", filtroSchema);

module.exports = Filtros;