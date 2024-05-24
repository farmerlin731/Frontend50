// Just judge the length of obj's keys.
const obj = { x: 5, y: 42 };
function isEmpty(obj) {
  return Object.keys(obj).length == 0;
}

console.log(isEmpty(obj));
