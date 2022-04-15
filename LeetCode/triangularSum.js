const triangularSum = (nums) => {
  let n = nums.length;
  while (n > 1) {
    for (let i = 0; i < n - 1; i++) {
      nums[i] = (nums[i] + nums[i + 1]) % 10;
    }
    nums.pop();
    n--;
  }

  return nums[0];
};

let nums = [1, 2, 3, 4, 5];
console.log(triangularSum(nums));
