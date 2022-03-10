const sortArrayByParity = (arr) => {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] % 2 != 0) {
      while (true) {
        if (arr[right] % 2 == 0) {
          let temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
          right--;
          break;
        } else {
          right--;
        }
      }
      left++;
    } else {
      left++;
    }
  }
  return arr;
};

const sortArrayByParity2 = (arr) => {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] > arr[right] % 2) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }

    if (arr[left] % 2 === 0) left++;
    if (arr[right] % 2 != 0) right--;
  }
  return arr;
};

let nums = [3, 1, 2, 4, 5, 8, 6, 7, 10];
console.log(sortArrayByParity2(nums));
