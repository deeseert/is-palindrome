// Connections to MongoDB
const mongoose = require('mongoose');
// Get the mongoURI from config/default.json
const config = require('config');
const db = config.get('mongoURI');

// Connect with mongoose.connect() which returns a promise
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Database Connected');
  } catch (err) {
    console.log(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
