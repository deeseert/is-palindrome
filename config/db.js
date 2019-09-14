// Here is where I am doing the connections to MongoDB
const mongoose = require('mongoose');
// To get the mongoURI I put inside config/default.json
const config = require('config');
const db = config.get('mongoURI');

// Then connect with mongoose.connect() which returns a promise
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }); // the second argument object is just requested by the MongoDB
    console.log('Database Connected');
  } catch (err) {
    console.log(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
