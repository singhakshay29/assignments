const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const seedProduct = require('../senders/seed');

dotenv.config();

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to DB');
    return seedProduct();
  })
  .then(() => {
    app.listen(3000, () => console.log('Server running......'));
  })
  .catch((error) => {
    console.error('Error connecting to database:', error.message);
    process.exit(1);
  });
