const express = require('express');
const cors = require('cors');

const app = express();

app.options('*', cors()); // TODO: change * to http://atom.stationfive.com.au
var corsOptions = {
  origin: '*', // TODO: change * sto http://atom.stationfive.com.au
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// Initialise Middleware - This allows me to access req.body in order to add and send data to create a user or a post, etc
// app.use(express.json({ extended: false }));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running!'));

// Routes
app.use('/api/palindrome', require('./routes/api/palindromes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
