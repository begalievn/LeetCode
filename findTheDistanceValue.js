var findTheDistanceValue = function (arr1, arr2, d) {
  let res = 0;
  for (let i = 0; i < arr1.length; i++) {
    let condition = true;
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        condition = false;
        break;
      }
    }
    if (condition) {
      res += 1;
    }
  }

  return res;
};

let arr1 = [2, 1, 100, 3],
  arr2 = [-5, -2, 10, -3, 7],
  d = 6;
console.log(findTheDistanceValue(arr1, arr2, d));
