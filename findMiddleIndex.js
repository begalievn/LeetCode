var findMiddleIndex = function (nums) {
  let middleIndex = -1;
  let left = 0;
  let right = nums.reduce((a, b) => a + b, 0);

  for (let i = 0; i < nums.length; i++) {
    if (left === right - nums[i]) {
      middleIndex = i;
      break;
    }

    left += nums[i];
    right -= nums[i];
  }

  return middleIndex;
};
