// Fist idea is about 'Set' & 'Filter' & 'Dict'
// There are 4 solutions @ explainThis.
// I think 1(set) & 4(dict) are better!
const originalArr = [9, 1, 2, 2, 3, 4, 2, 4, 8, 1, 9];

function removeDuplicateSoluA(arr) {
  //   let ans = Array.from(new Set(originalArr));
  let ans = [...new Set(originalArr)];
  return ans;
}

function removeDuplicateSoluD(arr) {
  const ans = [];
  const dict = {};
  for (const item of originalArr) {
    if (!dict[item]) {
      ans.push(item);
      dict[item] = true;
    }
  }
  return ans;
}

console.log(removeDuplicateSoluD(originalArr));
