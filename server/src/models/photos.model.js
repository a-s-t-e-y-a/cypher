const mongoose = require("mongoose");
const image = new mongoose.Schema({
    original_name:{
      type: String,
      required: true
    },
    generated_name:{
      type: String,
      required: true
    },
    extension:{
      type: String,
      required: true
    },
    buff_data:{
      type:  String,
      required: true
    },
    related_product_id:{
        type: String,
        required: true
    },
    image_type:{
      type: String,
      required: true
    }
})
const Image = mongoose.model('Image',image)
module.exports = Image;