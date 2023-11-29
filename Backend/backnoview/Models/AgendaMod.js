const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    },
    carroRef:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Carro'
    },
    usarioRef:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

agendaSchema.set('toJSON', {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v; 
    }
  });


var Agendas = mongoose.model("Agendamento", agendaSchema);

module.exports = Agendas;