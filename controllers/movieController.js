const Movie = require('../models/Movie');

exports.getAllMovies = async (req, res) => {
  try {
    // TODO: Fetch all movies from the database
    // TODO: Send a JSON response with the movies
    // res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
exports.upvoteMovie = async (req, res) => {
  try {
    // TODO: Retrieve the movie ID from the request parameters
    // TODO: Update the movie's upvotes using $inc and retrieve the updated movie
    // TODO: Send a success response with the upvoted movie details
    // res.status(200).json({ message: 'Movie upvoted successfully', upvotedMovie: movie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.downvoteMovie = async (req, res) => {
  try {
    // TODO: Retrieve the movie ID from the request parameters
    // TODO: Update the movie's downvotes using $inc and retrieve the updated movie
    // TODO: Send a success response with the downvoted movie details
    // res.status(200).json({ message: 'Movie downvoted successfully', downvotedMovie: movie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
