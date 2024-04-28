function clamp(num, lowest, highest) {
  let ansMe = num > highest ? highest : num < lowest ? lowest : num;
  let ans = Math.min(highest, Math.max(lowest, num));
  console.log(ans);
  return ans;
}

console.log();
clamp(7, 0, 9); // => 7

// 小於 lower，返回 lower
clamp(-12, -4, 5); // => -4

// 大於 upper，返回 upper
clamp(18, 3, 9); // => 9
