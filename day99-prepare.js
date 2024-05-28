//==dayXX==
//deepClone
const objects = [{ a: 1 }, { b: 2 }];

let tmp = JSON.stringify(objects);
let ans = JSON.parse(tmp);
let ans2 = structuredClone(objects);
console.log(ans2);
console.log(ans2[0] == objects[0]);

//==dayXX==
//isEqual
// Something I missed: 'null' situation.
// And 'Array' compared to 'Object'.
// But u still can check 'keys' in array,
// I feel my answer is better. XD

function isEqual(objA, objB) {
  if (typeof objA != typeof objB) return false;
  if (typeof objA != "object") return objA === objB;
  if (Object.keys(objA).length != Object.keys(objB).length) return false;

  for (let key in objA) {
    if (!isEqual(objA[key], objB[key])) return false;
  }

  return true;
}

console.log(isEqual({ 0: 1, 1: 2 }, [1, 2]));

//==dayXX==
//Repeat
// Fist Idea: Use the setInterval and cancel it when reach the limit times.
// But how to cancel it ?
// Solution in explainThis : use setTimeout and recursion.

function repeatByMe(func, times, wait) {
  let counter = 0;
  return function (...args) {
    setInterval(() => {
      func(...args);
      counter++;
    }, wait);
  };
}

function repeat(func, times, wait) {
  return function wrapper(...args) {
    func(...args);
    times--;
    if (times > 0) {
      setTimeout(() => wrapper(...args), wait);
    }
  };
}

const repeatFunc = repeat(console.log, 5, 3000);
repeatFunc("Hello World :)"); // 每 3 秒輸出一次，共輸出 5 次
