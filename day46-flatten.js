//First Idea:
//Use for-loop to chech each element, if it is an array, spread it.
//And do 'n' times for-loop.
//Need set a flag, if no element is an array , break the for-loop.
//If u want the funtion for fully flatten, just use the recursion.
//Solution in explainThis is cleaner & faster than mine. XD

let array = [1, 2, [3, [4, 5, [6, 7, [8]]]]];

function flattenByMe(array, depth = 1) {
  //   const depth = 2;
  let tmpInput = [];
  let result = [];
  for (let i = 0; i < depth; i++) {
    tmpInput = i == 0 ? [...array] : [...result];
    result = [];
    for (const item of tmpInput)
      if (Array.isArray(item)) {
        result.push(...item);
      } else {
        result.push(item);
      }
  }
  return result;
}

function flattenByExplainThis(array, depth = 1) {
  var flat = function (arr, n) {
    const result = []; // 用來存扁平化的陣列

    for (let item of arr) {
      // 確認 arr 中的元素 item 是不是陣列，以及還有沒有 n，n 大於 0 表示還有層數
      if (Array.isArray(item) && n > 0) {
        // 這時，我們遞迴地呼叫 flat，因為多往下扁平化一層，要把 n - 1。
        // 然後把結果丟回 result
        result.push(...flat(item, n - 1));
      } else {
        result.push(item); // 如果是非陣列的一般元素，就直接放回 result
      }
    }

    return result;
  };
}

console.log(flattenByMe(array, 2));
