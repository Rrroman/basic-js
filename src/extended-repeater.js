const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  let bigStr = '';
  let smallStr = '';

  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.separator === undefined) {
    options.separator = '+';
  }

  // How to get out from if Hell? T_T
  if (options.addition !== undefined) {
    if (options.additionSeparator !== undefined) {
      if (options.additionRepeatTimes !== undefined) {
        for (let i = 0; i < options.additionRepeatTimes; i++) {
          smallStr += options.addition + options.additionSeparator;
        }
      } else {
        smallStr += options.addition + options.additionSeparator;
      }
      smallStr = smallStr.slice(0, -options.additionSeparator.length);
    } else if (options.additionRepeatTimes !== undefined) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        smallStr += options.addition;
      }
    } else {
      smallStr = options.addition;
    }
  }

  if (options.repeatTimes !== undefined) {
    for (let i = 0; i < options.repeatTimes; i++) {
      if (options.separator !== undefined) {
        bigStr += str + smallStr + options.separator;
      } else {
        bigStr += str + smallStr;
      }
    }
    if (options.separator !== undefined) {
      bigStr = bigStr.slice(0, -options.separator.length);
    }
  }

  return bigStr;
};
