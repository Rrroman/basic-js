const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');

  let result = '';
  if (members === null || members === undefined || members.length === 0) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    let element = members[i];

    if (typeof element === 'string' && element.length > 0) {
      char = element.trim().toUpperCase()[0];
      result += char;
    }
  }

  result = result.split('').sort().join('');
  return result;
};
