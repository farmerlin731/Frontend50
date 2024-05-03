function sleep(duration, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
      console.log(`in sleep: ${value}`);
    }, duration);
  });
}

let promiseArr = [sleep(3000, 500), sleep(5000, 1000), sleep(1000, 66)];

// Learn how to use promise.all
// The usage of '[]' need to be noticed!
// Promise.all is still a promise !
const tmp = Promise.all(promiseArr).then(([res1, res2, res3]) => {
  console.log(`res1:${res1}`);
  console.log(`res2:${res2}`);
  console.log(`res3:${res3}`);
  return res1 + res2 + res3;
});

console.log(tmp);
tmp.then((ans) => console.log(`out:${ans}`));

// I feel this solution is a greater one :)
var addTwoPromisesFromExplain = async function (promise1, promise2) {
  // 透過 await 搭配 Promise.all
  // 取得兩個 promises 實現的值，並解構出 result1 與 result2
  const [result1, result2] = await Promise.all([promise1, promise2]);
  // 回傳拿到的兩個值的合
  return result1 + result2;
};
