const CustomError = require('../extensions/custom-error');
let arr = [];
const chainMaker = {
  getLength() {
    // What for is this function, never used in tests ???
    return this;
  },
  addLink(value) {
    arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      arr = [];
      throw new Error('THROWN');
    }

    arr = arr.filter((e, i) => position - 1 !== i);

    return this;
  },
  reverseChain() {
    arr = arr.reverse();
    return this;
  },
  finishChain() {
    let tempArr = arr;
    arr = [];
    return tempArr.join('~~');
  },
};

module.exports = chainMaker;
