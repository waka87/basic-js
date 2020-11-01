const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 if (Array.isArray(arr)) {
   //console.log(arr);
   var newArr = arr;
   for (var i = 0; i < newArr.length; i++) {
    if (newArr [i] === '--discard-next') {
      newArr[i]=undefined;
     newArr[i+1] = undefined;
     
    } else if (newArr [i] === '--discard-prev')  {
      newArr[i-1] = undefined;
      newArr[i] = undefined;
      
    } else if (newArr [i] === '--double-next')  {
      newArr[i] = newArr[i+1];
      
    }
    else if (newArr [i] === '--double-prev')  {
      
      newArr[i] = newArr[i-1];
      
    }
  }
  return newArr.filter(n => n !== undefined);
  } 
 throw "Error";

};
