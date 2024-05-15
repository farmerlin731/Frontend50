const nums = [1, 2, 3, 4];
fn = function sum(accum, curr) {
  return accum + curr * curr;
};
init = 100;

function reduce(arr, fn, init) {
  let result = init;
  for (const i of arr) {
    result = fn(result, i);
  }
  return result;
}

console.log(reduce(nums, fn, init));
