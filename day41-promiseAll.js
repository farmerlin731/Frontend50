// Concept:
// Should know how to combine all promise
// And notice the situation when error occur.
// But.. while one promise catch error, rest of them still executing.. should fix it ?
function promiseAll(promises) {
  const output = Array(promises.length);
  let fulfillCounter = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise()
        .then((res) => {
          output[index] = res;
          // console.log("over!");
          fulfillCounter++;
          if (fulfillCounter == promises.length) resolve(output);
        })
        .catch((err) => reject(err));
    });
  });
}

//Wrong ans @ 0709 , just for recording XD
var promiseAllWrongAns = async function (functions) {
  const result = Array(functions.length);

  functions.forEach((promise, i) => {
    promise()
      .then((res) => {
        result[i] = res;
      })
      .catch((err) => {
        throw new Error(err);
      });
  });

  return result;
};

// For test
function sleep(duration, value) {
  return new Promise((resolve, reject) => {
    // setTimeout(() => resolve(value), duration);
    if (duration == 3000) reject("Something error.");
    setTimeout(resolve, duration, value);
  });
}

let promiseArr = [
  () => sleep(3001, "First"),
  () => sleep(5000, "Second"),
  () => sleep(1000, "Third"),
];

let start = Date.now();
promiseAll(promiseArr)
  .then((res) => console.log(`time:${Date.now() - start} - [${res}]`))
  .catch((err) => console.log(`time:${Date.now() - start} - ${err}`));
