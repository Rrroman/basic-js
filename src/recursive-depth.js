const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      return (
        1 +
        arr.reduce((acc, element) => {
          return Math.max(acc, this.calculateDepth(element));
        }, 0)
      );
    } else {
      return 0;
    }
  }
};
