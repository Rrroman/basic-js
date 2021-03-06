const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.arrAbs = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
    this.max = 25;
  }
  encrypt(str, code) {
    str = str.toUpperCase();
    code = code.toUpperCase();

    if (
      typeof str !== 'string' ||
      typeof code !== 'string' ||
      str === '' ||
      code === ''
    ) {
      throw new Error('Add valid parameters');
    }

    if (this.direct === false) {
      str = str.split('').reverse('').join('');
    }

    let sum = null;
    let arrCode = [];
    let arrCipher = [];
    let regex = /[a-zA-Z]/;

    while (str.length > arrCode.length) {
      for (let i = 0, j = 0; i < code.length, j < str.length; i++, j++) {
        if (code.length === i) {
          i = 0;
        }
        const element = code[i];
        if (!str[j].match(regex)) {
          arrCode.push(str[j]);
          i--;
        } else {
          arrCode.push(element);
        }
      }
    }

    for (let i = 0, j = 0; i < str.length, j < arrCode.length; i++, j++) {
      const strElement = str[i];
      const codeElement = arrCode[i];
      const indexOfStrCharacter = this.arrAbs.indexOf(strElement);
      const indexOfCodeCharacter = this.arrAbs.indexOf(codeElement);
      sum = indexOfStrCharacter + indexOfCodeCharacter;

      if (indexOfStrCharacter === -1) {
        arrCipher.push(str[i]);
      } else if (sum < this.max) {
        arrCipher.push(this.arrAbs[sum]);
      } else if (sum === this.max) {
        arrCipher.push(this.arrAbs[sum]);
      } else {
        sum = sum - this.max - 1;
        arrCipher.push(this.arrAbs[sum]);
      }
    }

    return arrCipher.join('');
  }

  decrypt(str, code) {
    str = str.toUpperCase();
    code = code.toUpperCase();

    if (
      typeof str === 'undefined' ||
      typeof code === 'undefined' ||
      str === '' ||
      code === ''
    ) {
      throw new Error('Add valid parameters');
    }

    if (this.direct === false) {
      str = str.split('').reverse('').join('');
    }

    let arrCode = [];
    let arrCipher = [];
    let regex = /[a-zA-Z]/;

    while (str.length > arrCode.length) {
      for (let i = 0, j = 0; i < code.length, j < str.length; i++, j++) {
        if (code.length === i) {
          i = 0;
        }
        const element = code[i];
        if (!str[j].match(regex)) {
          arrCode.push(str[j]);
          i--;
        } else {
          arrCode.push(element);
        }
      }
    }

    for (let i = 0, j = 0; i < str.length, j < arrCode.length; i++, j++) {
      const strElement = str[i];
      const codeElement = arrCode[i];
      const indexOfStrCharacter = this.arrAbs.indexOf(strElement);
      const indexOfCodeCharacter = this.arrAbs.indexOf(codeElement);
      let subtraction = indexOfStrCharacter - indexOfCodeCharacter;

      if (indexOfStrCharacter === -1) {
        arrCipher.push(str[i]);
      } else if (subtraction >= 0) {
        arrCipher.push(this.arrAbs[subtraction]);
      } else if (subtraction === this.max) {
        arrCipher.push(this.arrAbs[subtraction]);
      } else {
        subtraction = this.max + subtraction + 1;
        arrCipher.push(this.arrAbs[subtraction]);
      }
    }

    return arrCipher.join('');
  }
}

module.exports = VigenereCipheringMachine;
