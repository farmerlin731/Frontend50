// const arr = [{ x: 1 }, { x: 0 }, { x: -1 }],
//   fn = (d) => d.x;

const arr = [5, 4, 1, 2, 3],
  fn = (x) => x;

function sortBy(arr, fn) {
  const result = [...arr];
  result.sort((a, b) => fn(a) - fn(b));
  return result;
}

console.log(sortBy(arr, fn));
