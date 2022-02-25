var removeElement = function (nums, val) {
  let countVal = 0;
  let head = 0;
  let tail = nums.length - 1;
  while (head <= tail) {
    if (nums[head] === val) {
      while (nums[tail] === val) {
        nums[tail] = "_";
        tail--;
        countVal++;
      }
      countVal++;
      nums[head] = nums[tail];
      nums[tail] = "_";
      tail--;
    }
    head++;
  }
  return [countVal, nums];
};

let removeElement2 = function (nums, val) {
  let i = 0;
  let countVal = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === val) {
      countVal++;
    }
    if (nums[j] != val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return [countVal, nums];
};

let removeElement3 = function (nums, val) {
  let i = 0;
  let len = nums.length;
  let countVal = 0;
  while (i < len) {
    if (nums[i] === val) {
      nums[i] = nums[len - 1];
      nums[len - 1] = "_";
      len--;
      countVal++;
    } else {
      i++;
    }
  }
  return [countVal, nums];
};
let nums = [3, 2, 2, 3],
  val = 3;
console.log(removeElement3(nums, val));
