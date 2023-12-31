const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    //Write a code to create a code
    res
      .status(201)
      .json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all products
exports.getProducts = async (req, res) => {
  try {
    //Write a code to get all products
    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Buy a product
exports.buyProduct = async (req, res) => {
  const productId = req.params.productId;

  try {
    // This function is responsible for handling the purchase of a product.
    // It first retrieves the product's ID from the request parameters, then attempts to find the corresponding product in the database. If the product is found, it checks whether the quantity is greater than 0. If so, it decrements the quantity by 1, saves the updated product, and responds with a success message along with the purchased product details. If the quantity is already 0, indicating the product is not available, it responds with an error message. If the product is not found, a 404 error response is sent. In case of any internal server error during the process, a 500 error response is provided.
    //res.json({ message: 'Product purchased successfully', product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
