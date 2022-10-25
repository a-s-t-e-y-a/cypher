const mongoose = require("mongoose");

const products = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  property_value: {
    type: String,
    required: true,
  },
  aggregateRating: {
    type: Number,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  country_origin: {
    type: String,
    required: true,
  },
  hasAdultConsideration: {
    type: Boolean,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  item_condition: {
    type: String,
    required: true,
  },
  keywords: {
    type: [String],
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  productid: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
});
const Product = mongoose.model("Products",products)
module.exports = Product;
