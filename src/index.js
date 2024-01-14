const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Movie = require('../models/Movie');

dotenv.config();

// Connect to DB
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  async () => {
    console.log('Connected to DB');

    try {
      const seedMovies = [
        { title: 'Inception', genre: 'Sci-Fi' },
        { title: 'The Shawshank Redemption', genre: 'Drama' },
        { title: 'The Dark Knight', genre: 'Action' },
        { title: 'Pulp Fiction', genre: 'Crime' },
        { title: 'Forrest Gump', genre: 'Drama' },
        { title: 'The Matrix', genre: 'Action' },
        { title: "Schindler's List", genre: 'Biography' },
      ];

      await Movie.insertMany(seedMovies);
      console.log('Movies seeded successfully');
    } catch (error) {
      console.error('Error seeding movies:', error.message);
    }

    // Start the server
    app.listen(3000, () => console.log('Server running......'));
  }
);
