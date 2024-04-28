function dropRightWhile(arr, predicate) {
  let lastIndex;
  for (i = arr.length - 1; i >= 0; i--) {
    if (!predicate(arr[i])) {
      lastIndex = i;
      break;
    }
  }
  // ans in explainthis, maybe more elegant in while loop?
  //   while (lastIndex >= 0 && predicate(array[lastIndex], lastIndex, array)) {
  //     lastIndex--;
  //   }

  const ans = arr.slice(0, lastIndex + 1);
  console.log(ans);
  return ans;
}

// 範例一
dropRightWhile(
  ["hello", "world", "today", "isGood"],
  (value) => value.length > 5
);
// => ['hello', 'world', 'today']

// 範例二
dropRightWhile(
  [
    { name: "Alice", age: 25 },
    { name: "Charlie", age: 20 },
    { name: "Bob", age: 30 },
  ],
  (obj) => obj.age > 25
);
// => [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]

// 範例三
dropRightWhile([10, 20, 30, 40, 50, 10], (value) => value !== 10);
// => [10, 20, 30, 40, 50, 10]

// 範例四
dropRightWhile([1], (value) => value > 0);
// => []

function dropRightWhileFromExplain(array, predicate) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (!predicate(array[i], i, array)) {
      return array.slice(0, i + 1);
    }
  }
  return [];
}
