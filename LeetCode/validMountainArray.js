var validMountainArray = function (arr) {
  let i = 0;
  while (i + 1 < arr.length && arr[i] < arr[i + 1]) {
    i++;
  }

  if (i == 0 || i == arr.length - 1) {
    return false;
  }

  while (i + 1 < arr.length && arr[i] > arr[i + 1]) {
    i++;
  }

  return i == arr.length - 1;
};

let arr = [0, 3, 2, 1, 5];
console.log(validMountainArray(arr));
