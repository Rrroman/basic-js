const CustomError = require('../extensions/custom-error');

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  console.log('disksNumber = ' + disksNumber);
  console.log('turnsSpeed = ' + turnsSpeed);

  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = Math.floor((turns * 60 * 60) / turnsSpeed);

  return {
    turns: turns,
    seconds: seconds,
  };

  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
