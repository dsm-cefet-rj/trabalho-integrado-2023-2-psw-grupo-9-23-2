const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filtroSchema = new Schema({
    marca: {
        type: String,
        required: true
    }
    
})

filtroSchema.set('toJSON', {//Teste para ver se delete e update vao funcionar com isso
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v; 
    }
  });

var Filtros = mongoose.model("Filtros", filtroSchema);

module.exports = Filtros;