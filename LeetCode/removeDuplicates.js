var removeDuplicates = function (nums) {
  let index = 0;
  let runner;
  for (let i = 1; i < nums.length; i++) {
    runner = i;
    if (nums[index] != nums[runner]) {
      nums[index + 1] = nums[runner];
      index++;
    }
  }
  return index + 1;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
