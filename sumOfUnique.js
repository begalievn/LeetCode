var sumOfUnique = function (nums) {
  let res = 0;
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] == 1) {
      res += Number(keys[i]);
    }
  }
  return res;
};

function sum(nums) {
  const hash = {};
  let result = 0;
  for (let num of nums) {
    if (hash[num] > 1) continue;
    if (hash[num] == undefined) {
      result += num;
      hash[num] = 1;
    } else {
      result -= num;
      hash[num]++;
    }
  }
  return result;
}

let nums = [1, 5, 1, 2, 1];
console.log(sum(nums));
