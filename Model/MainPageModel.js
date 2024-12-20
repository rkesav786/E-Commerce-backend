const Mongoose = require("mongoose");

let formData = new Mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  sub_heading: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  desc_text: {
    type: String,
    required: true,
  },
});

let MainPageData = Mongoose.model("formdata", formData);

module.exports = MainPageData;
