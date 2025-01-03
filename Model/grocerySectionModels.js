const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true }, // Changed to String
  offer_price: { type: String }, // Changed to String
  tag: { type: String },
  image: {
    name: { type: String },
    size: { type: Number },
    type: { type: String },
    preview: { type: String, maxlength: 6665536 },
  },
  offer_texts: [{ offer_text: { type: String, required: true } }],
  brand_name: { type: String, required: true },
  quantity: { type: String, required: true },
  color: { type: String, required: true },
  maximum_shelf_life: { type: String, required: true },
  nutrient_content: { type: String, required: true },
  content_type: { type: String },
  description: { type: String },
});

const grocerySectionSchema = new mongoose.Schema(
  {
    section_name: { type: String, required: true },
    items: [itemSchema],
    // createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const GrocerySection = mongoose.model("GroceySection", grocerySectionSchema);
module.exports = GrocerySection;
