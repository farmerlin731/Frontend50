// Concept:
// Fist Idea: Use the setInterval and cancel it when reach the limit times.
// Solution in explainThis : use setTimeout and recursion.

function repeatByMe(func, times, wait) {
  let counter = 0;
  return function (...args) {
    const timeID = setInterval(() => {
      func(...args);
      counter++;
      if (counter == times) clearInterval(timeID);
    }, wait);
  };
}

function repeatByExplainthis(func, times, wait) {
  return function wrapper(...args) {
    func(...args);
    times--;
    if (times > 0) {
      setTimeout(() => wrapper(...args), wait);
    }
  };
}

const repeatFunc = repeatByMe(console.log, 5, 1000);
repeatFunc("Hello World :)"); // 每 1 秒輸出一次，共輸出 5 次
