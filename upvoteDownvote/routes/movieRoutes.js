const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Routes
router.get('/movies', movieController.getAllMovies);
router.patch('/upvote/:movieId', movieController.upvoteMovie);
router.patch('/downvote/:movieId', movieController.downvoteMovie);

module.exports = router;
