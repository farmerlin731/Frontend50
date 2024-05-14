const arr = [1, 2, 3],
  fn = function firstIndex(n, i) {
    return i === 0;
  };

function filter(arr, cbFunc) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cbFunc(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filter(arr, fn));
