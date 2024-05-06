let array = [1, 13, 7, 54];
let predicate = (num) => num > 10;

// It seems 'forEach' can't be break.
// array.forEach((num, index) => {
//   if (predicate(num)) {
//     console.log(index);
//   }
// });

function findIndex(array, predicate, fromIndex = 0) {
  for (let i = fromIndex; i < array.length; i++) {
    if (predicate(array[i])) return i;
  }

  return -1;
}

let ans1 = findIndex([1, 13, 7, 54], (num) => num > 10); // 1
let ans2 = findIndex([1, 13, 7, 54], (num) => num > 200); // -1

console.log(ans1, ans2);

// ExplainThis said that u need to consider the situation of 'fromIndex < 0' ...
