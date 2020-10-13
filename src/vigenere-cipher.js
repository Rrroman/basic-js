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
      str = str.split('').reverse('').join();
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
      sum;
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

    console.log('encrypt this.direct is => ' + this.direct);
    console.log('encrypt Str => ' + str);
    console.log('encrypt Code =>' + code);
    console.log('encrypt Result => ' + arrCipher.join('').toUpperCase());
    arrCipher;
    return arrCipher.join('');
    // return this.direct
    //   ? arrCipher.join('').toUpperCase()
    //   : arrCipher.reverse().join('').toUpperCase();
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
      str = str.split('').reverse('').join();
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
    console.log('decrypt this.direct is => ' + this.direct);
    console.log('decrypt Str => ' + str);
    console.log('decrypt Code =>' + code);
    console.log('decrypt Result => ' + arrCipher.join('').toUpperCase());
    return arrCipher.join('');
    // return this.direct
    // ? arrCipher.join('').toUpperCase()
    // : arrCipher.reverse().join('').toUpperCase();
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);
// QFM#J1Y
// encrypt Code =>DDQIBPVV
console.log(directMachine.encrypt('LSN24X', 'POZCIC'));
// console.log(directMachine.encrypt('AGM24', 'POZCIC'));
// console.log(reverseMachine.encrypt('k,f', 'fw'));
// console.log(directMachine.decrypt('p,,,b', 'fw'));
// console.log(reverseMachine.decrypt('p,,,b', 'fw'));
// console.log(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'));

// console.log(directMachine.encrypt('Same length key', 'Samelengthkey'));

module.exports = VigenereCipheringMachine;

// encrypt this.direct is => false
// encrypt Str => ),Y
// encrypt Code =>PV
// encrypt Result => ),N
// decrypt this.direct is => false
// decrypt Str => ),,,N
// decrypt Code =>PV
// decrypt Result => ),,,Y

// 1) Vigenere cipher
//        functional requirements
//          double-sided reverse cryptography 2:

//       AssertionError: expected '),,,Y' to equal ')Y'
//       + expected - actual

//       -),,,Y
//       +)Y
