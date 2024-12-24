const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const data = require("./Controller/dataControllers");
const homeformdata = require("./Controller/homeDataControllers");
const mobileSection = require("./Controller/mobileSectionControllers");
const grocerySection = require("./Controller/grocerySectionControllers");
const fashionSection = require("./Controller/fashionSectionControllers");
const furnitureSection = require("./Controller/furnitureSectionControllers");

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongo connected"))
  .catch((error) => console.error("mongo db could not connected", error));

const port = process.env.PORT;
app.post("/api/formdata", data);
app.post("/api/homeformdata", homeformdata);
app.post("/api/mobile-section", mobileSection);
app.post("/api/grocery-section", grocerySection);
app.post("/api/fashion-section", fashionSection);
app.post("/api/furniture-section", furnitureSection);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});