const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const isLoggedIn = require('../middlewares/isLoggedIn');

// Assuming you have a middleware for user authentication
router.use(isLoggedIn);

// Get book recommendations
router.get('/recommendations', isLoggedIn, bookController.getRecommendations);

// Create a book
router.post('/create', bookController.createBook);

// Rate a book
router.post('/rate', isLoggedIn, bookController.rateBook);

// Get book details
router.get('/:bookId', bookController.getBookDetails);

module.exports = router;
