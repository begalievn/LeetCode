var replaceElements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1]) {
      let max = arr[i + 1];
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > max) {
          max = arr[j];
        }
      }
      arr[i] = max;
    }
    if (i == arr.length - 1) {
      arr[i] = -1;
    }
  }
  return arr;
};

let arr = [400];
console.log(replaceElements(arr));
