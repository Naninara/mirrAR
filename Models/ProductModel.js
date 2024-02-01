const mongoose = require("mongoose");

const ProductModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  variants: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "variants" }],
    default: [],
  },
});

module.exports = mongoose.model("Products", ProductModel);
