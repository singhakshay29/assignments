const Book = require('../models/bookModel');
const User = require('../models/userModel');

exports.createBook = async (req, res) => {
  try {
    const { title, author, genre } = req.body;
    const book = await Book.create({ title, author, genre });
    res.status(201).json({ message: 'Book created successfully', book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getBookDetails = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book details retrieved successfully', book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.rateBook = async (req, res) => {
  try {
    const { bookId, rating } = req.body;
    const userId = req.user;

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Check if the user has already rated the book
    const existingRating = book.ratings.find((r) => r.userId.equals(userId));
    if (existingRating) {
      return res
        .status(400)
        .json({ message: 'User has already rated the book' });
    }

    // Update book ratings
    book.ratings.push({ userId, rating });
    const totalRatings = book.ratings.length;
    const sumRatings = book.ratings.reduce((sum, r) => sum + r.rating, 0);
    book.averageRating = sumRatings / totalRatings;

    await book.save();

    res.json({ message: 'Book rated successfully', book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getRecommendations = async (req, res) => {
  try {
    // For now, let's fetch books with the highest average ratings
    const recommendations = await Book.find().sort('-averageRating').limit(5);

    res.json({ message: 'Recommended books', recommendations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
