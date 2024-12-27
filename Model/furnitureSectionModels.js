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
  highlight_texts: [{ highlight_text: { type: String, required: true } }],
  model_number: { type: String }, // Changed to String
  model_name: { type: String, required: true },
  product_color: { type: String, required: true },
  storage_included: { type: String, required: true },
  with_mattress: { type: String, required: true },
  bed_size: { type: String, required: true },
});

const furnitureSectionSchema = new mongoose.Schema(
  {
    section_name: { type: String, required: true },
    items: [itemSchema],
    // createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const FurnitureSection = mongoose.model(
  "FurnitureSection",
  furnitureSectionSchema
);
module.exports = FurnitureSection;
