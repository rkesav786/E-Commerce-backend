const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  offer_price: { type: Number },
  tag: { type: String },
  image: {
    name: String,
    size: Number,
    type: String,
    preview: String,
  },
});

const mobileSectionSchema = new mongoose.Schema({
  section_name: { type: String, required: true },
  items: [itemSchema],
  createdAt: { type: Date, default: Date.now },
});

const MobileSection = mongoose.model("MobileSection", mobileSectionSchema);
module.exports = MobileSection;
