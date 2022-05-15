var minimumAbsDifference = function (arr) {
  let res = [];
  arr.sort((a, b) => a - b);

  let min = 1000000;

  for (let i = 0; i < arr.length - 1; i++) {
    let difference = Math.abs(Math.abs(arr[i + 1]) - Math.abs(arr[i]));
    console.log(difference);
    if (difference < min) {
      min = difference;
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let difference = Math.abs(arr[i + 1] - arr[i]);
    if (min === difference) {
      res.push([arr[i], arr[i + 1]]);
    }
  }

  return res;
};

let arr = [3, 8, -10, 23, 19, -4, -14, 27];
console.log(minimumAbsDifference(arr));
