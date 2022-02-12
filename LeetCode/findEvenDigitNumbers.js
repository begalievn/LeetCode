const findNumbers = function (nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      res++;
    }
  }
  return res;
};

let nums = [555, 901, 482, 1771];
console.log(findNumbers(nums));
