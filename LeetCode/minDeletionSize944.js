var minDeletionSize = function (strs) {
  let res = 0;
  for (let i = 0; i < strs[0].length; i++) {
    if (check(i, strs)) {
      res++;
    }
  }
  return res;
};

function check(index, arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i][index];
  }

  sorted = str.split("").sort().join("");

  if (str !== sorted) {
    return true;
  } else {
    return false;
  }
}

let strs = ["a", "b"];
console.log(minDeletionSize(strs));
