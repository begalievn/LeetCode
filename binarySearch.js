var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let result = binarySearch2(nums, l, r, target);
  return result;
};

function binarySearch(arr, l, r, x) {
  if (r >= l) {
    let mid = Math.floor((r - l) / 2);

    if (arr[mid] == x) {
      return mid;
    }

    if (arr[mid] > x) {
      return binarySearch(arr, l, mid - 1, x);
    }

    return binarySearch(arr, mid + 1, r, x);
  }

  return -1;
}

function binarySearch2(arr, l, r, x) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);

    // If the element is present at the middle
    // itself
    if (arr[mid] == x) return mid;

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);

    // Else the element can only be present
    // in right subarray
    return binarySearch(arr, mid + 1, r, x);
  }

  // We reach here when element is not
  // present in array
  return -1;
}

let nums = [-1, 0, 3, 5, 9, 12],
  target = 9;
// console.log(search(nums, target));

const BinarySearch = (arr, val) => {
  arr.sort();
  let mid = Math.floor(arr.length / 2);
  let maxVal = arr[arr.length - 1];
  if (val > maxVal) {
    return -1;
  }
  while (mid >= 0 && mid <= arr.length) {
    if (arr[mid] == val) {
      return arr[mid];
    }
    if (arr[mid] > val) {
      mid = Math.floor(mid / 2);
    }
    if (arr[mid] < val) {
      mid = Math.floor((arr.lenth - mid) / 2);
    }
  }
  return -1;
};

console.log(BinarySearch([1, 6, 5, 2, 8, 7, 3, 4], 2));
