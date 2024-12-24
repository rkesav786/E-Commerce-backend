let grocerySectionModels = require("../Model/grocerySectionModels");

module.exports = (req, res) => {
  let { section_name, name, description, price, offer_price, image, tag } =
    req.body;

  grocerySectionModels
    .create({
      section_name: section_name,
      name: name,
      description: description,
      price: price,
      offer_price: offer_price,
      tag: tag,
      image: image,
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
