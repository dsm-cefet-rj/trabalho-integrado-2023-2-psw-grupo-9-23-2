const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String,
        required: true
    },
    senha: {
        type:String,
        required: true
    },
    nome:{
      type:String,
      required:true
    },
    telefone:{
      type:String,//1-Precisei mudar, pois estava dando erro que Int is not defined
      required:true//2-Campos como Telefone/cpf/etc sao String mesmo. Usar como int tende a dar ruim 
    },
    dataNas:{
      type:Date,
      required:true
    }
    
})

userSchema.set('toJSON', {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v; 
    }
  });

var Users = mongoose.model("User", userSchema);

module.exports = Users;