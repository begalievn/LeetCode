var sortedSquares = function (nums) {
  let res = nums.map((num) => {
    return (num *= num);
  });
  return res.sort((a, b) => a - b);
};

let nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));
