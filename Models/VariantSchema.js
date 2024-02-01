const mongoose = require("mongoose");

const VariantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  SKU: {
    type: String,
    required: true,
  },
  additionalCost: {
    type: Number,
    required: true,
  },
  StockCount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("variants", VariantSchema);
