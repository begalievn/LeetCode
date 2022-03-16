const countPairs = (nums, k) => {
  let pairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (j * i) % k === 0) {
        pairs++;
      }
    }
  }
  return pairs;
};

let nums = [1, 2, 3, 4],
  k = 1;
console.log(countPairs(nums, k));
