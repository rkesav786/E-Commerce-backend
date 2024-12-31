const MobileSection = require("../../Model/mobileSectionModels");
const GrocerySection = require("../../Model/grocerySectionModels");
const FashionSection = require("../../Model/fashionSectionModels");
const FurnitureSection = require("../../Model/furnitureSectionModels");
const ApplianceSection = require("../../Model/applianceSectionModels");
const ElectronicsSection = require("../../Model/electronicsSectionModels");
const HomePage = require("../../Model/homePageModels");

// Mobile Section

exports.MobileSection = async (req, res) => {
  try {
    const items = await MobileSection.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items" });
  }
};

// GrocerySection

exports.GrocerySection = async (req, res) => {
  try {
    const items = await GrocerySection.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items" });
  }
};

// FashionSection

exports.FashionSection = async (req, res) => {
  try {
    const items = await FashionSection.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items" });
  }
};

// FurnitureSection

exports.FurnitureSection = async (req, res) => {
  try {
    const items = await FurnitureSection.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items" });
  }
};

// Mobile Section

exports.ApplianceSection = async (req, res) => {
  try {
    const items = await ApplianceSection.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items" });
  }
};

// ElectronicsSection

exports.ElectronicsSection = async (req, res) => {
  try {
    const items = await ElectronicsSection.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items" });
  }
};

//HomePage

exports.HomePage = async (req, res) => {
  try {
    const items = await HomePage.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items" });
  }
};
