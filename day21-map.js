// not difficult
// Index is one parameter in 'cbFunc' , so you can't use the 'for(const i of arr){}'.

const arr = [1, 2, 3],
  fn = function plusI(n, i) {
    return n + i;
  };

function map(arr, cbFunc) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cbFunc(arr[i], i));
  }
  return result;
}

console.log(map(arr, fn));
