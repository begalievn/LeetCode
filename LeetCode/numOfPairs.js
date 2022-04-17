var numOfPairs = function (nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        count++;
      }
    }
  }
  return count;
};

(nums = ["1", "1", "1"]), (target = "11");
console.log(numOfPairs(nums, target));
