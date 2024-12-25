const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const mobileSectionController = require("./Controller/mobileSectionControllers");

const app = express();
require("dotenv").config();

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.post("/api/mobile-section", mobileSectionController.saveMobileSection);
app.get("/api/mobile-section", mobileSectionController.getMobileSections);
app.get(
  "/api/mobile-section/:id",
  mobileSectionController.getMobileSectionById
);
app.delete("/api/mobile-section/:id", mobileSectionController.deleteSection);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
