var nextGreaterElement = function (nums1, nums2) {
  const ans = [];
  for (let i = 0; i < nums1.length; i++) {
    ans.push(findNext(nums1[i], nums2));
  }
  return ans;
};

function findNext(num, arr) {
  let index = arr.indexOf(num);
  let nextElement = -1;
  for (let j = index; j < arr.length; j++) {
    if (arr[j] > num) {
      nextElement = arr[j];
      return nextElement;
    }
  }

  return nextElement;
}

let nums1 = [2, 4],
  nums2 = [1, 2, 3, 4];

console.log(nextGreaterElement(nums1, nums2));
