const express = require('express');
const router = express.Router();
// const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const moment = require('moment');

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
        id: mongoose.Types.ObjectId(),
        text: req.body.name,
        isPalindrome: helper.isPalindrome(req.body.name),
        created: moment().format('M/D/YYYY, H:mm:ss A'),
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
    const PARSE_FORMAT = 'M/D/YYYY, H:mm:ss A';
    const messagesFromDB = await Message.find().sort({datefield: -1}).lean();
    const tenMinsAgo = moment().subtract(10, 'minutes');
    const filteredMessages = messagesFromDB.filter(message => moment(message.created, PARSE_FORMAT).isAfter(tenMinsAgo)).slice(0, 10);
    console.log('filtered Messages from DB: ', filteredMessages);
    // res.send("Hi I'm the list of all the palindromes");
    res.send(filteredMessages);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
  // res.send("Hi I'm the list of all the palindromes");
});

module.exports = router;
