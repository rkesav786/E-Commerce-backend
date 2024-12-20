let MainPageData = require("../Model/MainPageModel");

module.exports = (req, res) => {
  let { heading, sub_heading, desc, desc_text } = req.body;

  MainPageData.create({
    heading: heading,
    sub_heading: sub_heading,
    desc: desc,
    desc_text: desc_text,
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
