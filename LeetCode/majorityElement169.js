var majorityElement = function (nums) {
  let result = nums[0];
  let obj = {};
  nums.forEach((num) => {
    if (obj[num]) {
      obj[num] += 1;
      if (obj[num] > Math.floor(nums.length / 2)) {
        result = num;
      }
    } else {
      obj[num] = 1;
    }
  });

  return result;
};

let nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
