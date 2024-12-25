const Mongoose = require("mongoose");

let furnitureSectionData = new Mongoose.Schema({
  section_name: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  offer_price: {
    type: String,
  },
  tag: {
    type: String,
  },
  image: {
    type: Object,
    properties: {
      name: String,
      size: Number,
      type: String,
      preview: String,
    },
  },
});

let FurnitureSection = Mongoose.model(
  "furniture-section",
  furnitureSectionData
);

module.exports = FurnitureSection;
