const FurnitureSection = require("../Model/furnitureSectionModels");

exports.saveFurnitureSection = async (req, res) => {
  try {
    const { _id, section_name, items } = req.body;

    // Transform items data
    const transformedItems = items.map((item) => ({
      ...item,
      price: Number(item.price),
      offer_price: Number(item.offer_price),
      model_number: Number(item.model_number.replace(/\D/g, "")), // Remove non-digits
    }));

    if (_id) {
      const updated = await FurnitureSection.findByIdAndUpdate(
        _id,
        { section_name, items: transformedItems },
        { new: true, runValidators: true }
      );
      return res.json({
        success: true,
        message: "Section updated successfully",
        section: updated,
      });
    }

    const newSection = await FurnitureSection.create({
      section_name,
      items: transformedItems,
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
exports.getFurnitureSections = async (req, res) => {
  try {
    const sections = await FurnitureSection.find().sort({ createdAt: -1 });
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

exports.getFurnitureSectionById = async (req, res) => {
  try {
    const section = await FurnitureSection.findById(req.params.id);
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
    const section = await FurnitureSection.findByIdAndDelete(req.params.id);
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
