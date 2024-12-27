const mongoose = require("mongoose");

const catagorySchema = new mongoose.Schema({
  catagory_image: {
    name: { type: String },
    size: { type: Number },
    type: { type: String },
    preview: { type: String, maxlength: 6665536 },
  },
  catagory_name: { type: String, required: true },
});

const itemSchema = new mongoose.Schema({
  brand_img: {
    name: { type: String },
    size: { type: Number },
    type: { type: String },
    preview: { type: String, maxlength: 6665536 },
  },
  brand_name: { type: String, required: true },
  starting_from: { type: String, required: true },
});

const homePageSchema = new mongoose.Schema(
  {
    carousel_one: {
      name: { type: String },
      size: { type: Number },
      type: { type: String },
      preview: { type: String, maxlength: 6665536 },
    },
    carousel_two: {
      name: { type: String },
      size: { type: Number },
      type: { type: String },
      preview: { type: String, maxlength: 6665536 },
    },
    carousel_three: {
      name: { type: String },
      size: { type: Number },
      type: { type: String },
      preview: { type: String, maxlength: 6665536 },
    },
    mobile_items: [itemSchema],
    grocery_items: [itemSchema],
    fashion_items: [itemSchema],
    furniture_items: [itemSchema],
    electronics_items: [itemSchema],
    appliance_items: [itemSchema],
    list_catagory: [catagorySchema],
    // createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const HomePage = mongoose.model("HomePage", homePageSchema);
module.exports = HomePage;
