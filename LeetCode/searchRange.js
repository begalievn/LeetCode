var searchRange = function (nums, target) {
  const resArr = [-1, -1];
  let headFound = false,
    tailFound = false;
  let head = 0,
    tail = nums.length - 1;

  while ((!headFound || !tailFound) && head <= tail) {
    if (nums[head] === target) {
      resArr[0] = head;
      headFound = true;
    } else {
      if (!headFound) {
        head++;
      }
    }

    if (nums[tail] === target) {
      resArr[1] = tail;
      tailFound = true;
    } else {
      if (!tailFound) {
        tail--;
      }
    }
  }

  return resArr;
};

var searchRange2 = function (nums, target) {
  const res = [-1, -1];
  let head = 0,
    tail = nums.length - 1;
  while (head <= tail) {
    let mid = Math.floor((tail + head) / 2);
    if (nums[mid] === target) {
      res[0] = mid;
      break;
    }

    if (nums[mid] > target) {
      tail = mid;
    } else {
      head = mid;
    }
    console.log(mid);
  }

  // while (head <= tail) {
  //   let mid = Math.floor((tail + head) / 2);
  //   if (nums[mid] === target) {
  //     res[1] = mid;
  //     head = mid;
  //   }

  //   if (nums[mid] > target) {
  //     tail = mid;
  //   } else {
  //     head = mid;
  //   }
  //   console.log(mid);
  // }

  return res;
};

var searchRange3 = function (nums, target) {
  let n = nums.length - 1;
  let min = bsMin(nums, target, 0, n, -1);
  let max = bsMax(nums, target, 0, n, -1);
  return [min, max];
};

function bsMin(nums, B, l, r, ans = -1) {
  if (l > r) {
    return ans;
  }

  let m = Math.floor((r + l) / 2);
  if (nums[m] == B) {
    ans = m;
    return bsMin(nums, B, l, m - 1, ans);
  } else if (nums[m] > B) {
    return bsMin(nums, B, l, m - 1, ans);
  } else {
    return bsMin(nums, B, m + 1, r, ans);
  }
}

function bsMax(nums, B, l, r, ans) {
  if (l > r) {
    return ans;
  }

  let m = Math.floor((r + l) / 2);
  if (nums[m] == B) {
    ans = m;
    return bsMax(nums, B, m + 1, r, ans);
  } else if (nums[m] > B) {
    return bsMax(nums, B, l, m - 1, ans);
  } else {
    return bsMax(nums, B, m + 1, r, ans);
  }
}

let nums = [4, 4, 6, 7, 8, 10],
  target = 4;
console.log(searchRange3(nums, target));
