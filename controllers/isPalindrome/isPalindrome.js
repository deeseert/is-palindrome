var mongoose = require('mongoose');
var Message = mongoose.model('Message');

const isPalindrome = (string) => {
  palindromeString = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
  for (x = 0; x < palindromeString.length / 2; x++) {
    if (palindromeString[x] != palindromeString.slice(-1 - x)[0]) {
      return false;
    }
  }
  return true;
};

// function isPalindrome(text) {
//     if (!text) {
//         return false;
//     }

//     text = text.replace(/[^\w]/g, ""); //remove all characters except a-z
//     text = text.toLowerCase();
//     if (text.length === 0) {
//         return false;
//     }

//     return text == text.split('').reverse().join('');
// }
exports.isPalindrome = isPalindrome;
