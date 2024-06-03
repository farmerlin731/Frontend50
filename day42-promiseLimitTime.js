//Fist Idea:
//Return new promise , If the original funcion works in time, resolve the result directly.
//And use setTimeOut for reject the 'Error'.
//Solution in explainThis is using Promise.race.. feel that mine is better ? XD

function promiseLimitTime(fn, limit = 1000) {
  return new Promise((resolve, reject) => {
    fn().then(resolve);
    setTimeout(reject, limit, "Time Limit Exceeded");
  });
}

// For test
function sleep(duration, value) {
  return new Promise((resolve, reject) => {
    // setTimeout(() => resolve(value), duration);
    if (duration == 3000) reject("Something error.");
    setTimeout(resolve, duration, value);
  });
}

const input = () => sleep(1000, "Hello World ! :)");
const testLimit = promiseLimitTime(input, 2000);

testLimit.then((res) => console.log(res)).catch((err) => console.log(err));
