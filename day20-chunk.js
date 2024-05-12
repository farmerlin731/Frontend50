// Some conditions u need to concern:
// 1. If the chunkSize <= 0 ?
// 2. If the (arr.length/chunkSize) is not interger.
// First idea: Using 'slice' .

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13];
const chunkSize = 5;

function chunkArray(arr, size) {
  if (size <= 0) return null;
  let ans = [];
  for (let round = 0; round < arr.length; round += size) {
    ans.push(arr.slice(round, round + size));
  }
  return ans;
}

console.log(chunkArray(originalArray, chunkSize));
