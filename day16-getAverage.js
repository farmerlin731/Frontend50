const arr = [10, 20, 30, 40, 50];

// If u want get 'a' value from array
// The first choice is using 'reduce' .
function getAverage(arr) {
  return arr.reduce((acc, cur) => acc + cur) / arr.length;
}

console.log(getAverage(arr));
