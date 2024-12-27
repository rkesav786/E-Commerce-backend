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
  style_code: { type: String, required: true },
  fit: { type: String, required: true },
  sleeve: { type: String, required: true },
  pattern: { type: String, required: true },
  color: { type: String, required: true },
  net_quantity: { type: Number },
});

const fashionSectionSchema = new mongoose.Schema(
  {
    section_name: { type: String, required: true },
    items: [itemSchema],
    // createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const FashionSection = mongoose.model("FashionSection", fashionSectionSchema);
module.exports = FashionSection;
