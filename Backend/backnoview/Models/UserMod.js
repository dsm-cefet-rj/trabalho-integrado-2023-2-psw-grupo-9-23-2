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