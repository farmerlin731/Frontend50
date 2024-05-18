// First idea: Create a private counter by closure.
// And need to know how to pass argument to returned function.
// Feel my soloution is better than explainThis. XD
const fn = (a, b, c) => a + b + c,
  calls = [
    [1, 2, 3],
    [2, 3, 6],
    [2, 3, 8],
  ];

function once(fn) {
  let counter = 0;
  return function (...args) {
    counter++;
    // console.log(args);
    return counter > 1 ? undefined : fn(...args);
  };
}

const onceFn = once(fn);
calls.forEach((item) => console.log(onceFn(...item)));
