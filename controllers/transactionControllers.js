const express = require("express");
const router = express.Router();
const Category = require("../models/categoryModel");
const Transaction = require("../models/transactionModel");

// Create a new transaction
const newTransaction = async (req, res) => {
  try {
    //Write your code here
    const { amount, type, category } = req.body;
    if (!amount || !type || !category) {
      return res.status(400).json({ message: "All fiels are mandetory" });
    }
    const newTransaction = await Transaction.create({
      amount,
      type,
      category,
    });
    res.status(200).json({ newTransaction });
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
};

const getAllTransaction = async (req, res) => {
  try {
    //Write your code here and populate Category with transaction
    const expense = await Transaction.find();
    res.status(200).json({ expense });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you pass the transaction ID in the URL
    const { amount, type, category } = req.body;

    // Validate input
    if (!amount || !type || !category) {
      return res.status(400).json({ message: "All fields are mandatory" });
    }

    // Update the transaction
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      id,
      { amount, type, category },
      { new: true } // Return the updated document
    );

    if (!updatedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({ updatedTransaction });
    // Write your code here to update a transaction
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you pass the transaction ID in the URL

    // Delete the transaction
    const deletedTransaction = await Transaction.findByIdAndDelete(id);

    if (!deletedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({ deletedTransaction });

    // Write your code here to delete a transaction
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
};

const newCategory = async (req, res) => {
  try {
    // Write a code here to create a new category
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "All fiels are mandetory" });
    }
    const newCategory = await Category.create({
      name,
    });
    res.status(200).json({ newCategory });
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
};

const getAllCategories = async (req, res) => {
  try {
    //Write your code here to get All Category
    const category = await Category.find();
    res.status(200).json({ category });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  newTransaction,
  getAllTransaction,
  updateTransaction,
  deleteTransaction,
  newCategory,
  getAllCategories,
};
