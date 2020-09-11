const CustomError = require('../extensions/custom-error');

module.exports = function countCats(matrix) {
  let counter = 0;

  for (let i = 0; i < matrix.length; i++) {
    const subArr = matrix[i];

    for (let k = 0; k < subArr.length; k++) {
      const element = subArr[k];
      if (element === '^^') {
        counter++;
      }
    }
  }
  return counter;
};
