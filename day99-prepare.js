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
