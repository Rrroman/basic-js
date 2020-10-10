const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const naturalLogarithmOfTwo = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  sampleActivity = parseFloat(sampleActivity);
  if (isNaN(sampleActivity) || sampleActivity <= 0 || sampleActivity > 15) {
    return false;
  }

  const rateConstant = naturalLogarithmOfTwo / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / rateConstant);
};
