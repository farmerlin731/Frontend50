// Concept :
// Should know the '+' operator means add the prototype.valueOf().
// And the String(obj) means add the prototype.toString().

class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }
  valueOf() {
    return this.nums.reduce((acc, cur) => acc + cur, 0);
  }
  toString() {
    return `[${this.nums.join(",")}]`;
  }
  print() {
    return this.nums;
  }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4, 9]);

console.log(obj1 + obj2);
console.log(String(obj2));
