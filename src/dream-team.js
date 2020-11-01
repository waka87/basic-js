const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 
  var arr = [];
  var str;
  if (!members || members.length === 0) {
    return false;
  } else {
  for (var i=0; i< members.length; i++) {
    if(typeof members[i] === "string") {
      var str = members[i].trim();
      arr.push(str[0].toUpperCase());
    }
  }
  if (arr === []) {
    return false;
  }
  arr.sort();
  return arr.join('');
  } 
  
};
