const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var obj = {};
  obj.turns = 2**disksNumber - 1;
  obj.seconds = Math.floor((obj.turns / turnsSpeed) * 3600);
  return obj;
};
