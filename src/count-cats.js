const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  for(var i =0; i<matrix.length; i++) {
    let n = matrix[i];
    for(var j=0; j<n.length; j++) {
      if (n[j] === "^^")  result++;
      
    }
  }

  return result;

  // remove line with error and write your code here
};
