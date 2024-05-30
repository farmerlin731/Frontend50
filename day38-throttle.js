//Concept:
//Use the closure for setting the flag.
//Use the setTimeout for reopening the flag.

function throttle(fn, delay = 500) {
  let isExecuting = false;
  return function (...args) {
    if (isExecuting) return;
    setTimeout(() => (isExecuting = false), delay);
    isExecuting = true;
    return fn(...args);
  };
}

let tmpFunc = (a, b) => a + b;
const throFunc = throttle(tmpFunc, 2000);

console.log(throFunc(100, 200));
console.log(throFunc(100, 200));
console.log(throFunc(100, 200));
