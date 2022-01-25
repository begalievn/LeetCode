var kthDistinct = function (arr, k) {
  let obj = {};
  res = "";
  for (let i = 0; i < arr.length; i++) {
    if (Object.keys(obj).includes(arr[i])) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (const item in obj) {
    if (obj[item] == 1) {
      if (k > 0) {
        k--;
      }
      if (k == 0) {
        res = item;
        return res;
      }
    }
  }
  return res;
};

let arr = ["a", "b", "a"],
  k = 3;
console.log(kthDistinct(arr, k));
