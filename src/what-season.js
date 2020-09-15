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
  return result;
};
