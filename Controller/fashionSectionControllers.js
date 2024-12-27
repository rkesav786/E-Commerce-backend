const FashionSection = require("../Model/fashionSectionModels");

exports.saveFashionSection = async (req, res) => {
  try {
    const { _id, section_name, items } = req.body;

    // Transform items data
    const transformedItems = items.map((item) => ({
      ...item,
      price: Number(item.price),
      offer_price: Number(item.offer_price),
    }));

    if (_id) {
      const updated = await FashionSection.findByIdAndUpdate(
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

    const newSection = await FashionSection.create({
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
exports.getFashionSections = async (req, res) => {
  try {
    const sections = await FashionSection.find().sort({ createdAt: -1 });
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

exports.getFashionSectionById = async (req, res) => {
  try {
    const section = await FashionSection.findById(req.params.id);
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
    const section = await FashionSection.findByIdAndDelete(req.params.id);
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
