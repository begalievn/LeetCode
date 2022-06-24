var pivotIndex = function (nums) {
  let pivotIndex = -1;
  let index = 0;
  while (index < nums.length) {
    let left =
      index === 0 ? 0 : nums.slice(0, index).reduce((acc, item) => acc + item);

    let right =
      index === nums.length - 1
        ? 0
        : nums.slice(index + 1).reduce((acc, item) => acc + item);
    if (left === right) {
      pivotIndex = index;
      return pivotIndex;
    }
    index++;
  }

  return pivotIndex;
};

let nums = [-1, -1, 0, 1, 1, 0];

console.log(pivotIndex(nums));
