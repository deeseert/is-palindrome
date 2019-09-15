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

// Initialise Middleware - This allows to access req.body
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running!'));

// Routes
app.use('/palindromes', require('./routes/api/palindromes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
