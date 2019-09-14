const express = require('express');
const cors = require('cors');
const fs = require('fs');
const connectDB = require('./config/db'); // bring in the connected DB

const app = express();

// Connect DB
connectDB();
// Unable CORS
app.options('*', cors());
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Read from local database
fs.readFile('database/myDatabase.txt', 'utf8', (err, data) => {
  try {
    const newData = JSON.parse(data); // CHANGED HERE
    console.log('this is newData: ', newData);
  } catch (err) {}
});

// Initialise Middleware - This allows me to access req.body in order to add and send data to create a user or a post, etc
// app.use(express.json({ extended: false }));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running!'));

// Routes
app.use('/api/palindromes', require('./routes/api/palindromes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
