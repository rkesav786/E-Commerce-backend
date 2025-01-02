const express = require("express");
const Stripe = require("stripe");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const mobileSectionController = require("./Controller/mobileSectionControllers");
const furnitureSectionController = require("./Controller/furnitureSectionControllers");
const fashionSectionController = require("./Controller/fashionSectionControllers");
const grocerySectionController = require("./Controller/grocerySectionControllers");
const applianceSectionController = require("./Controller/applianceSectionControllers");
const electronicsSectionController = require("./Controller/electronicsSectionControllers");
const homePageController = require("./Controller/homePageControllers");
const { registerUser, loginUser } = require("./Controller/authControllers");
const {
  MobileSection,
  GrocerySection,
  FashionSection,
  FurnitureSection,
  ApplianceSection,
  ElectronicsSection,
  HomePage,
} = require("./Controller/Frontend/dataFetchControllers");

const app = express();
require("dotenv").config();

const stripe = new Stripe(
  "sk_test_51QckJyGIu8d3Ca1cFIgFN2TqCC4RS4PfzcgUEvZinejcoXM2DhUHYZ5E2R3q31eFe8ms5JuH4UGSyTAHhKZ6lJdr00NohoRwSq"
);

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes Mobile Section
app.post("/api/mobile-section", mobileSectionController.saveMobileSection);
app.get("/api/mobile-section", mobileSectionController.getMobileSections);
app.get(
  "/api/mobile-section/:id",
  mobileSectionController.getMobileSectionById
);
app.delete("/api/mobile-section/:id", mobileSectionController.deleteSection);

// Routes Furniture Section
app.post(
  "/api/furniture-section",
  furnitureSectionController.saveFurnitureSection
);
app.get(
  "/api/furniture-section",
  furnitureSectionController.getFurnitureSections
);
app.get(
  "/api/furniture-section/:id",
  furnitureSectionController.getFurnitureSectionById
);
app.delete(
  "/api/furniture-section/:id",
  furnitureSectionController.deleteSection
);

// Routes Fashion Section
app.post("/api/fashion-section", fashionSectionController.saveFashionSection);
app.get("/api/fashion-section", fashionSectionController.getFashionSections);
app.get(
  "/api/fashion-section/:id",
  fashionSectionController.getFashionSectionById
);
app.delete("/api/fashion-section/:id", fashionSectionController.deleteSection);

// Routes Grocery Section
app.post("/api/grocery-section", grocerySectionController.saveGrocerySection);
app.get("/api/grocery-section", grocerySectionController.getGrocerySections);
app.get(
  "/api/grocery-section/:id",
  grocerySectionController.getGrocerySectionById
);
app.delete("/api/grocery-section/:id", grocerySectionController.deleteSection);

// Routes Appliance Section
app.post(
  "/api/appliance-section",
  applianceSectionController.saveApplianceSection
);
app.get(
  "/api/appliance-section",
  applianceSectionController.getApplianceSections
);
app.get(
  "/api/appliance-section/:id",
  applianceSectionController.getApplianceSectionById
);
app.delete(
  "/api/appliance-section/:id",
  applianceSectionController.deleteSection
);

// Routes Electronics Section
app.post(
  "/api/electronics-section",
  electronicsSectionController.saveElectronicsSection
);
app.get(
  "/api/electronics-section",
  electronicsSectionController.getElectronicsSections
);
app.get(
  "/api/electronics-section/:id",
  electronicsSectionController.getElectronicsSectionById
);
app.delete(
  "/api/electronics-section/:id",
  electronicsSectionController.deleteSection
);

// Routes  Home Page
app.post("/api/home-page", homePageController.saveHomePage);
app.get("/api/home-page", homePageController.getHomePage);
app.get("/api/home-page/:id", homePageController.getHomePageById);
app.delete("/api/home-page/:id", homePageController.deleteSection);

// Routes
app.post("/api/register", registerUser);
app.post("/api/login", loginUser);

// Frontend Fetch Data Api

app.get("/api/frontend/mobile-section", MobileSection);
app.get("/api/frontend/grocery-section", GrocerySection);
app.get("/api/frontend/fashion-section", FashionSection);
app.get("/api/frontend/furniture-section", FurnitureSection);
app.get("/api/frontend/electronics-section", ElectronicsSection);
app.get("/api/frontend/appliance-section", ApplianceSection);
app.get("/api/frontend/home-page", HomePage);

app.post("/create-payment-intent", async (req, res) => {
  const { amount, currency } = req.body; // Receive payment details from frontend

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Amount in smallest currency unit (e.g., cents for USD)
      currency,
    });

    res.send({
      clientSecret: paymentIntent.client_secret, // Send this to the frontend
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
