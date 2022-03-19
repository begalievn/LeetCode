const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b);
  let result;
  let difference = Number.MAX_SAFE_INTEGER;
  let len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    let first = nums[i],
      second,
      third;
    let sum;
    let left = i + 1,
      right = len - 1;
    while (left < right) {
      (second = nums[left]), (third = nums[right]);
      sum = first + second + third;
      if (sum == target) {
        return sum;
      }
      if (Math.abs(sum - target) < difference) {
        difference = Math.abs(sum - target);
        result = sum;
      }

      sum < target ? left++ : right--;
    }
  }

  return result;
};

let nums = [-1, 2, 1, -4, 1],
  target = 1;

console.log(threeSumClosest(nums, target));
