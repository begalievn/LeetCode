const replaceElements = (arr) => {
  let len = arr.length;
  let max = arr[len - 1];
  arr[len - 1] = -1;
  for (let i = len - 2; i >= 0; i--) {
    let current = arr[i];
    arr[i] = max;
    if (current > max) {
      max = current;
    }
  }

  return arr;
};

let arr = [400];
console.log(replaceElements(arr));
