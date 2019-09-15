const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const moment = require('moment');

const Message = require('../../models/message');
const helper = require('../../controllers/isPalindrome/isPalindrome.js');

// Post Palindrome
router.post('/', async (req, res) => {
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
});

// Get all Palindrome
router.get('/', async (req, res) => {
  try {
    const PARSE_FORMAT = 'M/D/YYYY, H:mm:ss A';
    const messagesFromDB = await Message.find();
    const tenMinsAgo = moment().subtract(10, 'minutes');
    const filteredMessages = messagesFromDB
      .filter((message) => moment(message.created, PARSE_FORMAT).isAfter(tenMinsAgo))
      .reverse()
      .slice(0, 10);
    res.send(filteredMessages);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
