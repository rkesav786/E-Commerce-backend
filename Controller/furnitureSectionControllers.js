const mongoose = require("mongoose");
const furnitureSectionModels = require("../Model/furnitureSectionModels");

module.exports = async (req, res) => {
  try {
    const items = Array.isArray(req.body.items)
      ? req.body.items
      : [req.body.items]; // Handle if single or array of items

    console.log("Received items:", items);

    const results = await Promise.all(
      items.map(async (item) => {
        if (item._id) {
          // If _id exists, update the existing document
          return furnitureSectionModels.findByIdAndUpdate(
            item._id,
            {
              section_name: item.section_name,
              name: item.name,
              description: item.description,
              price: item.price,
              offer_price: item.offer_price,
              tag: item.tag,
              image: item.image,
            },
            { new: true } // Return the updated document
          );
        } else {
          // If no _id, create a new document
          return furnitureSectionModels.create({
            section_name: item.section_name,
            name: item.name,
            description: item.description,
            price: item.price,
            offer_price: item.offer_price,
            tag: item.tag,
            image: item.image,
          });
        }
      })
    );

    console.log("Operation successful:", results);
    res.status(200).json({
      success: true,
      message: "Data processed successfully",
      results,
    });
  } catch (error) {
    console.error("Error processing data:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process data",
      error: error.message,
    });
  }
};
