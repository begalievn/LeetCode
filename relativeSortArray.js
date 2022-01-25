var relativeSortArray = function (arr1, arr2) {
  let res = [];
  let doNotAppear = [];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[i]) {
        res.push(arr1[j]);
        arr1[j] = -1;
      }
      if (i === arr2.length - 1 && arr1[j] != arr2[i] && arr1[j] != -1) {
        doNotAppear.push(arr1[j]);
      }
    }
  }
  res = res.concat(
    doNotAppear.sort(function (a, b) {
      return a - b;
    })
  );
  return res;
};

let arr1 = [28, 6, 22, 8, 44, 17],
  arr2 = [22, 28, 8, 6];

console.log(relativeSortArray(arr1, arr2));
