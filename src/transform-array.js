const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (typeof arr !== 'object') {
    throw 'It is not array!';
  }
  let newArr = arr.slice();

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '--discard-next') {
      newArr.splice(i, 2, undefined);
    } else if (newArr[i] === '--discard-prev') {
      if (i === 0) {
        newArr.splice(i, 1);
      } else {
        newArr.splice(i - 1, 2, undefined);
      }
    } else if (newArr[i] === '--double-next') {
      newArr.splice(i, 1, newArr[i + 1]);
    } else if (newArr[i] === '--double-prev') {
      newArr.splice(i, 1, newArr[i - 1]);
    }
  }
  newArr = newArr.filter((e) => e !== undefined);
  return newArr;
};
