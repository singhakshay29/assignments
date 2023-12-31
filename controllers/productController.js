const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    //Write a code to create a code
    res
      .status(201)
      .json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all products
exports.getProducts = async (req, res) => {
  try {
    //Write a code to get all products
    const products = await Product.find();
    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Buy a product
exports.buyProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not Found" });
    }
    if (product.quantity <= 0) {
      return res.status(200).json({ message: "Product not available" });
    } else {
      product.quantity -= 1;
      return res.json({ message: "Product purchased successfully", product });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
