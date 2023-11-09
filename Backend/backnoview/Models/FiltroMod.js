const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//var normalize = require('normalize-mongoose');

const filtroSchema = new Schema({
    marca: {
        type: String,
        required: true
    }
    
})//.plugin(normalize);

filtroSchema.set('toJSON', {//Teste para ver se delete e update vao funcionar com isso
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v; 
    }
  });

//filtroSchema.plugin(normalize);
var Filtros = mongoose.model("Filtros", filtroSchema);

module.exports = Filtros;