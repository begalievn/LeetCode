var intersection = function (nums1, nums2) {
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        if (res.includes(nums1[i])) {
          continue;
        } else {
          res.push(nums1[i]);
        }
      }
    }
  }
  return res;
};

let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
console.log(intersection(nums1, nums2));
