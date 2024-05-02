function sleep(duration, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
      console.log(`in sleep: ${value}`);
    }, duration);
  });
}

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      return;
    }
    // promises.forEach((item) => Promise.resolve(item).then(resolve, reject));
    promises.forEach((item) => item.then(resolve, reject));
    //為什麼以上這個resolve的argument會自動帶入item promise回傳的resolve參數？
    //靠杯突然頓悟了 ->
    //item.then(rosolve) & item.then((res)=>resolve(res)) 這兩個是相等的！
    //可以想成 const test = (res) => resolve(res)
    //接著 item.then(test) , done !
  });
}

let promiseArr = [
  sleep(3000, "First"),
  sleep(5000, "Second"),
  sleep(1000, "Third"),
];

// Check the Status of each promise
console.log("--step1--");
console.log(promiseArr);
setTimeout(() => console.log(promiseArr), 6000); // this console would be last

// Test the race function
console.log("--step2--");
promiseRace(promiseArr).then((res) => console.log(`outside: ${res}`));
//promiseRace(promiseArr).then(console.log);
