let arr = [1, 2, 3, 4, 5, 6];
let predicate = (value) => value < 4;

//靠杯拉這是錯的，是後面全都要拉起來
// let ans = arr.filter((num) => !predicate(num));
// console.log(ans);
let index;
for (let i = 0; i < arr.length; i++) {
  if (!predicate(arr[i])) {
    index = i;
    break;
  }
}
let ans = index == undefined ? [] : arr.slice(index);
// console.log(index);
// console.log(ans);

function dropWhile(arr, predicate) {
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) {
      index = i;
      break;
    }
  }
  let ans = index == undefined ? [] : arr.slice(index);
  console.log(ans);
  return ans;
}

// 範例一
dropWhile([1, 2, 3, 4, 5, 6], (value) => value < 4);
// => [4, 5, 6]

// 範例二
dropWhile([0, 1, 2], (value) => value < 5);
// => []

// 範例三
dropWhile([0, 6, 1, 2], (value) => value < 5);
// => [6, 1, 2]
