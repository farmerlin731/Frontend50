const test = [1, 2, 3, 4, 5];

// note : Learn how to add methods in prototype.
Array.prototype.square = function () {
  return this.map((item) => item * item);
};

const numbers = [1, 2, 3, 4, 5];
const mixedArray = [1, 3.5];
const emptyArray = [];

let tmpA = numbers.square(); // [1, 4, 9, 16, 25]
let tmpB = mixedArray.square(); // [1, 12.25]
let tmpC = emptyArray.square(); // []

console.log(tmpA);
console.log(tmpB);
console.log(tmpC);
