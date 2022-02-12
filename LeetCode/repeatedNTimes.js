const repeatedNTimes = function (nums) {
  let res = 0;
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  let n = nums.length / 2;

  for (let num in obj) {
    if (obj[num] == n) {
      res = num;
    }
  }
  return res;
};

let nums = [5, 1, 5, 2, 5, 3, 5, 4];
console.log(repeatedNTimes(nums));
