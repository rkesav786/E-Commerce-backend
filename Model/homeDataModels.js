const Mongoose = require("mongoose");

let homeformData = new Mongoose.Schema({
  thumb_image_title: {
    type: String,
  },
  thumb_image: {
    type: String,
  },
  carousel_image_1: {
    type: String,
  },
  carousel_image_2: {
    type: String,
  },
  carousel_image_3: {
    type: String,
  },
  product_brand_name: {
    type: String,
  },
  product_image: {
    type: String,
  },
  product_starting_from: {
    type: String,
  },
});

let HomePageData = Mongoose.model("homeformdata", homeformData);

module.exports = HomePageData;
