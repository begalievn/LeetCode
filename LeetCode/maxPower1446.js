var maxPower = function (s) {
  let result = 0;
  let count = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      ++count;
      if (count > result) {
        result = count;
      }
    } else {
      count = 1;
    }
  }

  return result;
};

let s = "abbcccddddeeeedcba";
console.log(maxPower(s));
