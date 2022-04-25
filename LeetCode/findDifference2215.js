var findDifference = function (nums1, nums2) {
  const answer = [[], []];

  answer[0] = searchHelper(nums1, nums2);
  answer[1] = searchHelper(nums2, nums1);

  return answer;
};

const searchHelper = (arr1, arr2) => {
  let res = {};
  arr1.forEach((num) => {
    let condition = true;
    for (let i = 0; i < arr2.length; i++) {
      if (num === arr2[i]) {
        condition = false;
        break;
      }
    }
    if (condition) {
      res[num] = 1;
    }
  });
  return Object.keys(res).map((num) => Number(num));
};

let nums1 = [1, 2, 3, 3],
  nums2 = [1, 1, 2, 2];
console.log(findDifference(nums1, nums2));
