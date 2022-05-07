var intersection = function (nums) {
  const res = [];
  let obj = {};
  for (arr of nums) {
    for (number of arr) {
      if (obj[number]) {
        obj[number]++;
      } else {
        obj[number] = 1;
      }
    }
  }

  for (element in obj) {
    if (obj[element] === nums.length) {
      res.push(element);
    }
  }

  return res;
};

let nums = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(intersection(nums));
