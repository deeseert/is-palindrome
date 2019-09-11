const express = require('express');
const router = express.Router();

const isPalindrome = require('./../api/../api/palindromes');

// Post Palindrome
router.post('/', (req, res) => {
  const str = req.body.name;
  if (
    str
    // palindromeDatabase._list.length < 10 &&
    // palindromeChecker(str) &&
    // isNotEmpty(str)
  ) {
    isPalindrome(str);
  } else {
    res.status(400).json({ msg: 'something is wrong with you!' });
  }
});

// Get all Palindrome
router.get('/', (req, res) => {
  res.send("Hi I'm the list of all the palindromes");
});

module.exports = router;
