//First Idea:
//Create a private Map, key is string from arguments, value is previous result.

function memorize(fn) {
  const cache = new Map();
  const newFn = (...args) => {
    // let argsString = args.toString();
    let argsString = JSON.stringify(args); //Better!
    if (cache.has(argsString)) {
      console.log("u r using the cache!");
      return cache.get(argsString);
    } else {
      console.log("the first time :)");
      const result = fn(...args);
      cache.set(argsString, result);
      //   console.log(cache);
      return result;
    }
  };
  return newFn;
}

const sumFn = (a, b) => a + b;
const memorizeSum = memorize(sumFn);

console.log(memorizeSum(2, 3));
console.log(memorizeSum(2, 3));
