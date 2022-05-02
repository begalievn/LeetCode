const permute = function (nums) {
  const res = [];
  dfs(res, [], nums);
  return res;
};

const dfs = (res, arr, nums) => {
  if (arr.length === nums.length) {
    res.push([...arr]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!arr.includes(nums[i])) dfs(res, [...arr, nums[i]], nums);
  }
};

var permute2 = function (nums, set = [], answer = []) {
  if (!nums.length) answer.push([...set]);

  for (let i = 0; i < nums.length; i++) {
    const newNums = nums.filter((n, index) => index != i);
    set.push(nums[i]);
    permute(newNums, set, answer);
    set.pop();
  }

  return answer;
};
