// Compact an array into one 'value'
// The first idea is using 'reduce'.

// Ex1
// const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x],
//   x = 4; //ans65

// Ex2
const functions = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x],
  x = 1; //ans1000

function compose(functions, init) {
  let finalFn = (x) => {
    let result = functions.reduceRight((value, curFn) => {
      return curFn(value);
    }, x);
    return result;
  };
  return finalFn(init);
}

console.log(compose(functions, x));
