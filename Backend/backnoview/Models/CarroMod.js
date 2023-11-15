const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carroSchema = new Schema({
    isAntigo: {
        type: Boolean,
        required: true
    },
    nome:{
        type:String,
        required: true
    },
    imgLink: {
        type:String,
        required: true
    },
    km: {
        type:String,
        required: true
    },
    marca: {
        type:String,
        required: true
    },
    valor:{
        type:String,
        required: true
    }
    
})

carroSchema.set('toJSON', {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v; 
    }
  });

var Carros = mongoose.model("Carro", carroSchema);

module.exports = Carros;