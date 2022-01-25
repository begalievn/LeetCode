var frequencySort = function (nums) {
  let map = {};

  for (let num of nums) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }

  console.log(Object.entries(map));

  let sortedArray = Object.entries(map).sort((a, b) => {
    if (a[1] == b[1]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });

  let result = [];

  for (let arr of sortedArray) {
    while (arr[1] > 0) {
      result.push(arr[0]);
      arr[1]--;
    }
  }

  return result;
};

let nums = [1, 1, 2, 2, 2, 3];
console.log(frequencySort(nums));
