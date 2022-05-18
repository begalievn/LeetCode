var minAbsoluteSumDiff = function (nums1, nums2) {
  let res = 0;
  for (let i = 0; i < nums1.length; i++) {
    res += Math.abs(nums1[i] - nums2[i]);
  }
  return res;
};

var minAbsoluteSumDiff2 = function (nums1, nums2) {
  let absoluteSumDiff = 0;
  const length = nums1.length;

  let maxAdjustment;
  for (let i = 0; i < length; i++) {
    const actualDiff = Math.abs(nums1[i] - nums2[i]);
    if (actualDiff === 0) continue;

    absoluteSumDiff += actualDiff;
    if (maxAdjustment && maxAdjustment >= actualDiff) continue;
    for (let j = 0; j < length; j++) {
      if (i !== j) {
        const temp = Math.abs(nums1[j] - nums2[i]);
        if (temp < actualDiff) {
          const adjustment = actualDiff - temp;
          if (maxAdjustment === undefined || maxAdjustment < adjustment)
            maxAdjustment = adjustment;
        }
      }
    }
  }
  const result =
    maxAdjustment === undefined
      ? absoluteSumDiff
      : absoluteSumDiff - maxAdjustment;
  return result % (10 ** 9 + 7);
};

let nums1 = [1, 7, 5],
  nums2 = [2, 3, 5];
console.log(minAbsoluteSumDiff(nums1, nums2));
