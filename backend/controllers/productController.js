const Product = require("../models/Product");

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, category, image, desc, specs, description, longDescription, highlights, features } = req.body;
    
    // Auto-generate ID and slug
    const count = await Product.countDocuments();
    const id = `PROD-${String(count + 101)}`;
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

    const newProduct = new Product({
      id,
      slug,
      name,
      category,
      image,
      desc,
      specs: specs || [],
      description: description || "",
      longDescription: longDescription || "",
      highlights: highlights || [],
      features: features || []
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a product by custom ID
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findOneAndDelete({ id });
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully", id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
