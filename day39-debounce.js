// First Idea:
// Use setTimeout to postpone the funcion
// At the same time , cancel the previous ID .
// **(no matter it has already executed or not)

function debounce(fn, delay = 500) {
  let preID = undefined;
  return function (...args) {
    clearTimeout(preID);
    const curID = setTimeout(() => fn(...args), delay);
    preID = curID;
  };
}

// Test
let start = Date.now();
function log(...inputs) {
  console.log([Date.now() - start, inputs]);
}
const dlog = debounce(log, 1000);
setTimeout(() => dlog(1), 500);
setTimeout(() => dlog(2), 1000);
setTimeout(() => dlog(3), 3000);
