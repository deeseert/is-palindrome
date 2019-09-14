const express = require('express');
const router = express.Router();
// const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Message = require('../../models/message');
const helper = require('../../controllers/isPalindrome/isPalindrome.js');

// Post Palindrome
router.post(
  '/',
  // [
  //   check('name', 'name is required')
  //     .not()
  //     .isEmpty(),
  // ],
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    try {
      // Create a new message
      let newMessage = new Message({
        // id: mongoose.Types.ObjectId(),
        text: req.body.name,
        isPalindrome: helper.isPalindrome(req.body.name),
      });
      // Save it on the database
      await newMessage.save();
      res.json(newMessage);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error!');
    }
  }
);

// Get all Palindrome
router.get('/', async (req, res) => {
  try {
    const messagesFromDB = await Message.find().lean();
    console.log(messagesFromDB);
    // res.send("Hi I'm the list of all the palindromes");
    res.send(messagesFromDB);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
  // res.send("Hi I'm the list of all the palindromes");
});

module.exports = router;
