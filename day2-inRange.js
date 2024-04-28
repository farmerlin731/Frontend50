function inRange(value, start, end = 0) {
  let ans = value >= Math.min(start, end) && value < Math.max(start, end);
  console.log(ans);
  return ans;
}

inRange(3, 2, 4); // => true
inRange(4, 8); // => true
inRange(4, 2); // => false
inRange(2, 2); // => false
inRange(1.2, 2); // => true
