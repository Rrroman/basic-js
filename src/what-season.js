const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (isNaN(date)) {
    throw new Error('THROWN');
  }
  let month = date.getMonth();

  let result = '';

  console.log('date is => ' + month);
  switch (month) {
    case 0:
      result = 'winter';
      break;
    case 1:
      result = 'winter';
      break;
    case 2:
      result = 'spring';
      break;
    case 3:
      result = 'spring';
      break;
    case 4:
      result = 'spring';
      break;
    case 5:
      result = 'summer';
      break;
    case 6:
      result = 'summer';
      break;
    case 7:
      result = 'summer';
      break;
    case 8:
      result = 'autumn';
      break;
    case 9:
      result = 'autumn';
      break;
    case 10:
      result = 'autumn';
      break;
    case 11:
      result = 'winter';
      break;
  }
  console.log(result);
  return result;

  // switch (month) {
  //   case 0:
  //     return 'winter';
  //   case 1:
  //     return 'winter';
  //   case 2:
  //     return 'winter';
  //   case 3:
  //     return 'spring';
  //   case 4:
  //     return 'spring';
  //   case 5:
  //     return 'spring';
  //   case 6:
  //     return 'summer';
  //   case 7:
  //     return 'summer';
  //   case 8:
  //     return 'summer';
  //   case 9:
  //     return 'autumn';
  //   case 10:
  //     return 'autumn';
  //   case 11:
  //     return 'autumn';
  // }

  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
