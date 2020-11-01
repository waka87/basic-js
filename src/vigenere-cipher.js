const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
    var letter;
    var word = '';
    if (!message || !key) {
      throw "ERROR";
    } else {
      for (var i = 0; i < message.length; i++) {
        letter = ((message.charCodeAt(i) + key.charCodeAt(i % key.length)) % 128);
        word = word + String.fromCharCode(letter);
      }
      //console.log(word);
    }
    
  }    
  decrypt(encryptedMessage, key) {
    
  }
}

module.exports = VigenereCipheringMachine;
