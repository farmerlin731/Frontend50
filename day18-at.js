// not difficult
// the only thing u need to notice is 'index' may be smaller than 0 .

const arr = [0, 1, 2, 3, 4, 5];

// Error : Can't use 'this' in arrow function , haha.
// Array.prototype.at = (index) => {
//   index = index < 0 ? index + this.length : index;
//   return this[index];
// };

Array.prototype.at = function (index) {
  index = index < 0 ? index + this.length : index;
  return this[index];
};
console.log(arr.at(3)); // 3
console.log(arr.at(-2)); // 4
console.log(arr.at(-8)); // undefined
