const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/product.json`));

// Middlewares
app.use(express.json());

// Write PATCH endpoint to buy a product for the client here
// Endpoint /api/v1/products/:id
app.patch("/api/v1/products/:id", (req, res) => {
  try {
    const id = req.params.id;
    const productId = +id;
    const isPresent = products.find((item) => item.id === productId);

    if (isPresent) {
      const quantity = isPresent.quantity;
      if (quantity < 1) {
        res.status(404).json({
          status: "success",
          message: `${isPresent.name}, Out of stock!`,
        });
      } else {
        res.status(200).json({
          status: "success",
          message: `Thank you for purchasing ${isPresent.name}`,
          product: isPresent,
        });
      }
    } else {
      res.status(404).json({
        status: "failed",
        message: "Product not found!",
      });
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

module.exports = app;
