const thirdMax = (nums) => {
  let len = nums.length;
  nums.sort((a, b) => a - b);

  let idx = len - 1,
    i,
    distinctCount = 0;

  while (idx >= 0) {
    distinctCount++;
    i = idx - 1;
    // to check all the values with same value as nums[idx]
    while (i >= 0 && nums[i] === nums[idx]) {
      i--;
    }

    // no third distinct element
    if (i === -1) {
      return nums[len - 1];
    }

    idx = i;

    // found 2 bigger elements before?
    if (distinctCount === 2) {
      return nums[idx];
    }
  }
  return -1;
};

let nums = [1, 1, 2, 3];
console.log(thirdMax(nums));
