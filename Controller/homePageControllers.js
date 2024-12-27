const HomePage = require("../Model/homePageModels");

exports.saveHomePage = async (req, res) => {
  try {
    const {
      _id,
      carousel_one,
      carousel_two,
      carousel_three,
      mobile_items,
      list_catagory,
      grocery_items,
      appliance_items,
      electronics_items,
      fashion_items,
      furniture_items,
    } = req.body;

    // Update an existing section
    if (_id) {
      const updated = await HomePage.findByIdAndUpdate(
        _id,
        {
          carousel_one,
          carousel_two,
          carousel_three,
          mobile_items,
          list_catagory,
          grocery_items,
          appliance_items,
          electronics_items,
          fashion_items,
          furniture_items,
        },
        { new: true, runValidators: true } // Options to return the updated document and apply validation
      );

      if (!updated) {
        return res.status(404).json({
          success: false,
          message: "Section not found",
        });
      }

      return res.json({
        success: true,
        message: "Section updated successfully",
        section: updated,
      });
    }

    // Create a new section
    const newSection = await HomePage.create({
      carousel_one,
      carousel_two,
      carousel_three,
      mobile_items,
      list_catagory,
      grocery_items,
      appliance_items,
      electronics_items,
      fashion_items,
      furniture_items,
    });

    res.json({
      success: true,
      message: "Section created successfully",
      section: newSection,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getHomePage = async (req, res) => {
  try {
    const sections = await HomePage.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      results: sections,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getHomePageById = async (req, res) => {
  try {
    const section = await HomePage.findById(req.params.id);
    if (!section) {
      return res.status(404).json({
        success: false,
        message: "Section not found",
      });
    }
    res.json({
      success: true,
      section,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteSection = async (req, res) => {
  try {
    const section = await HomePage.findByIdAndDelete(req.params.id);
    if (!section) {
      return res.status(404).json({
        success: false,
        message: "Section not found",
      });
    }
    res.json({
      success: true,
      message: "Section deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
