function mergeSortedArrays(nums1, m, nums2, n) {
  for (let i = 0, c = 0; i < n; i++, m++) {
    for (let j = c; j < m; j++) {
      if (nums2[i] <= nums1[j]) {
        insertElement(nums1, m, j, nums2[i]);
        c = j;
      } else {
        nums1[m] = nums2[j];
      }
    }
  }
  return nums1;
}

function insertElement(arr, arrSize, index, element) {
  for (let i = arrSize - 1; i >= index; i++) {
    arr[i + 1] = arr[i];
  }
  arr[index] = element;
}

var merge = function (nums1, m, nums2, n) {
  let i, j, k;

  for (i = m - 1, j = n - 1, k = m + n - 1; i >= 0 && j >= 0; k--) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i--];
    } else {
      nums1[k] = nums2[j--];
    }
  }

  while (i >= 0) {
    nums1[k--] = nums1[i--];
  }

  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
console.log(mergeSortedArrays(nums1, m, nums2, n));
