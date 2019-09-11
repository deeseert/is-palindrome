const express = require('express');

const app = express();

// Initialise Middleware - This allows me to access req.body in order to add and send data to create a user or a post, etc
// app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running!'));

// Routes
app.use('/api/palindrome', require('./routes/api/palindromes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
