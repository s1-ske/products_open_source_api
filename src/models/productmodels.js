const mongoose = require("mongoose");


const product_schema = mongoose.Schema({
  name: String,
  brand: String,
  price: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports=mongoose.model("product",product_schema);
