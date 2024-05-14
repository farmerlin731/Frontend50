// aka intersection.. 前幾天才看過，回想一下Ｑ＿Ｑ
// use 'Counter'
let arr1 = [1, 1, 2, 3];
let arr2 = [2, 3];
let dict = {};
let ans = [];
for (let i of arr1) {
  if (!dict[i]) {
    dict[i] = 1;
  } else {
    dict[i]++;
  }
}

console.log(dict);
for (let i of arr2) {
  if (dict[i]) dict[i]--;
}
console.log(dict);

for (let i in dict) {
  if (dict[i] > 0) {
    ans = [...ans, ...new Array(dict[i]).fill(i)];
    // ans.push(i);
  }
}

console.log(ans);

function difference(arr1, arr2) {
  let dict = {};
  let ans = [];
  for (let i of arr1) {
    if (!dict[i]) {
      dict[i] = 1;
    } else {
      dict[i]++;
    }
  }

  for (let i of arr2) {
    if (dict[i]) dict[i]--;
  }

  for (let i in dict) {
    if (dict[i] > 0) {
      ans = [...ans, ...new Array(dict[i]).fill(i)];
      // ans.push(i);
    }
  }

  console.log(ans);
  return ans;
}

difference([], []); // []
difference([1, 1, 2, 3], [2, 3]); // [1, 1]
difference([1, 2, 3], [1, 2, 3, 4]); // []
difference([4, 3, 2, 1], [1, 2, 3]); // [4]

//Note: Searching in set is O(1)
function differenceByExplain(array, values) {
  const valuesSet = new Set(values);
  return array.filter((value) => !valuesSet.has(value));
}
