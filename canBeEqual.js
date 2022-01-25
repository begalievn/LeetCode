var canBeEqual = function (target, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (target[i] === arr[i]) {
      continue;
    } else {
      let condition = true;
      for (let j = i + 1; j < arr.length; j++) {
        if (target[i] === arr[j]) {
          condition = false;
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          break;
        }
      }
      if (condition) {
        return false;
      }
    }
  }
  return true;
};

let target = [3, 7, 9],
  arr = [3, 7, 11];
console.log(canBeEqual(target, arr));
