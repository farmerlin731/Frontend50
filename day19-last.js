const nums = [null, {}, 3];
// const nums = [];

Array.prototype.last = function () {
  return this.length == 0 ? -1 : this[this.length - 1];
};

console.log(nums.last());
