let HomePageData = require("../Model/homeDataModels");

module.exports = (req, res) => {
  let {
    thumb_image_title,
    thumb_image,
    carousel_image_1,
    carousel_image_3,
    carousel_image_2,
    product_brand_name,
    product_image,
    product_starting_from,
  } = req.body;

  HomePageData.create({
    thumb_image_title: thumb_image_title,
    thumb_image: thumb_image,
    carousel_image_1: carousel_image_1,
    carousel_image_2: carousel_image_2,
    carousel_image_3: carousel_image_3,
    product_brand_name: product_brand_name,
    product_image: product_image,
    product_starting_from: product_starting_from,
  })
    .then(() => {
      console.log("Page data added");
      res.status(201).send("Data added successfully");
    })
    .catch((error) => {
      console.error("Page data not added:", error);
      res.status(500).send("Failed to add data");
    });

  console.log(req.body);
};
