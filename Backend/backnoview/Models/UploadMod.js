const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    image: {
        type: String,
        required: true
    }
    
})

imageSchema.set('toJSON', {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v; 
    }
  });

var Images = mongoose.model("Image", imageSchema);

module.exports = Images;