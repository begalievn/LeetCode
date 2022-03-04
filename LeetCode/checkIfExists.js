const checkIfExists = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j] * 2) {
        return true;
      }
    }
  }
  return false;
};

let arr = [7, 2, 5, 3];
console.log(checkIfExists(arr));
