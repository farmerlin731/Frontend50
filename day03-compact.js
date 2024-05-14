// 原來還有直接filter(Boolean) 這招，直接幫你判斷item的真值
function compact(arr) {
  let ans = arr.filter(Boolean);
  console.log(ans);
  return ans;
}

// 範例一
compact([0, 1, false, 2, "", 3, "hello"]);
// => [1, 2, 3, 'hello']

// 範例二
compact([null, undefined, NaN, " "]);
// =>[' ']

// 範例三
compact([{ name: "Alice" }, null, { age: 30 }, undefined]);
// =>[{ name: 'Alice' }, { age: 30 }]
