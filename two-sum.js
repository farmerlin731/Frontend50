let nums = [2, 7, 11, 15];
let target = 9;
let dict = {};
let ans = [];

// 要怎樣判斷dict的key是undefined XD , 0 也會被當falsy
for (let i = 0; i < nums.length; i++) {
  let partner = target - nums[i];
  console.log(`partner: ${partner}`);
  if (dict[partner]) {
    ans = [i, dict[partner] - 1];
  } else {
    dict[nums[i]] = i + 1;
  }
}

console.log(ans);

// the following is from GPT.
function twoSum(nums, target) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }
  // 如果没有找到符合条件的组合，则返回空数组
  return [];
}

// 示例用法
console.log(twoSum(nums, target)); // 输出 [0, 1]，因为 nums[0] + nums[1] = 2 + 7 = 9
