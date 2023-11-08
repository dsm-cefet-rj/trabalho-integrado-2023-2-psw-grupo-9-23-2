const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//var normalize = require('normalize-mongoose');

const agendaSchema = new Schema({
    isOcupado: {
        type: Boolean,
        required: true
    },
    data:{
        type:String,
        required: true
    },
    hora: {
        type:String,
        required: true
    }
    
})//.plugin(normalize);

//filtroSchema.plugin(normalize);
var Agendas = mongoose.model("Agendamento", agendaSchema);

module.exports = Agendas;