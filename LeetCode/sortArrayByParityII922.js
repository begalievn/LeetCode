var sortArrayByParityII = function (nums) {
  let evens = [];
  let odds = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 != 0) {
      odds.push(nums[i]);
    } else {
      evens.push(nums[i]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 != 0) {
      nums[i] = odds.shift();
    } else {
      nums[i] = evens.shift();
    }
  }

  return nums;
};

let nums = [4, 2, 5, 7];

console.log(sortArrayByParityII(nums));
