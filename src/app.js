const fs = require("fs");
const express = require("express");
const { error } = require("console");
const app = express();

// Importing products from products.json file
const filepath = `${__dirname}/data/userDetails.json`;
const userDetails = JSON.parse(fs.readFileSync(filepath));

//Middlewares
app.use(express.json());

// Write POST endpoint for registering new user
app.post("/api/v1/details/", (req, res) => {
  const { name, mail, number } = req.body;
  const newId = userDetails[userDetails.length - 1].id;
  const newUser = {
    name: name,
    mail: mail,
    number: number,
    id: newId,
  };

  userDetails.push(newUser);
  fs.writeFile(filepath, JSON.stringify(userDetails), (error) => {
    if (error) {
      res.status(400).json({ message: "There is error" });
    } else {
      res.status(201).json({
        status: "Success",
        message: "User registered successfully",
        data: {
          newProduct: newUser,
        },
      });
    }
  });
});

// GET endpoint for sending the details of users
app.get("/api/v1/details", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Detail of users fetched successfully",
    data: {
      userDetails,
    },
  });
});

// GET endpoint for sending the products to client by id
app.get("/api/v1/userdetails/:id", (req, res) => {
  let { id } = req.params;
  id *= 1;
  const details = userDetails.find((details) => details.id === id);
  if (!details) {
    return res.status(404).send({
      status: "failed",
      message: "Product not found!",
    });
  } else {
    res.status(200).send({
      status: "success",
      message: "Details of users fetched successfully",
      data: {
        details,
      },
    });
  }
});

module.exports = app;
