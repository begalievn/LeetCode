var uniqueOccurrences = function (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      if (obj[keys[i]] == obj[keys[j]]) {
        return false;
      }
    }
  }
  return true;
};

let arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
console.log(uniqueOccurrences(arr));
