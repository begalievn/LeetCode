var divideString = function (s, k, fill) {
  let resString = "";
  let length = 0;
  if (s.length % k === 0) {
    length = s.length;
  } else {
    length = s.length;
    while (length % k !== 0) {
      length++;
    }
  }
  for (let i = 0; i < length; i++) {
    if (s[i]) {
      if (i % k == 0 && i !== 0) {
        resString += " ";
      }
      resString += s[i];
    } else {
      resString += fill;
    }
  }

  return resString.split(" ");
};

let s = "abcdefghij",
  k = 3,
  fill = "x";
console.log(divideString(s, k, fill));
