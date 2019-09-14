const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,
  },
  isPalindrome: {
    type: Boolean,
    required: true,
  },
  created: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Message', MessageSchema);
