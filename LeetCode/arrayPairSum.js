var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < nums.length; i += 2) {
    res += nums[i];
  }
  return res;
};

let nums = [6, 2, 6, 5, 1, 2];
console.log(arrayPairSum(nums));
