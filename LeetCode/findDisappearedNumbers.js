var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  let arr = new Array(n + 1).fill(0);
  let res = [];
  for (let i = 0; i < n; i++) {
    arr[nums[i]] = 1;
  }

  for (let i = 1; i <= n; i++) {
    if (arr[i] === 0) {
      res.push(i);
    }
  }

  return res;
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
