const Mongoose = require("mongoose");

let mobileSectionData = new Mongoose.Schema({
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
    type: String,
  },
});

let MobileSection = Mongoose.model("mobile-section", mobileSectionData);

module.exports = MobileSection;
