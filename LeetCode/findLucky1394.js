var findLucky = function (arr) {
  let result = -1;
  let obj = {};
  arr.forEach((num) => {
    if (obj[num]) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
  });

  Object.keys(obj).forEach((key) => {
    if (Number(key) === obj[key]) {
      if (Number(key) > result) {
        result = Number(key);
      }
    }
  });

  return result;
};

let arr = [2, 2, 2, 3, 3];
console.log(findLucky(arr));
