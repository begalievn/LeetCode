var maxNumberOfBalloons = function (text) {
  let obj = {};
  text.split("").forEach((letter) => {
    if (
      letter === "b" ||
      letter === "a" ||
      letter === "l" ||
      letter === "o" ||
      letter === "n"
    ) {
      if (obj[letter]) {
        obj[letter] += 1;
      } else {
        obj[letter] = 1;
      }
    }
  });

  let min = text.length;
  let objKeys = Object.keys(obj);
  for (let i = 0; i < objKeys.length; i++) {
    if (obj[objKeys[i]] < min) {
      min = obj[objKeys[i]];
    }
  }
  if (obj["o"] - min === min && obj["l"] - min === min) {
    return min;
  } else {
    return Math.min(obj["o"], obj["l"]);
  }
};

var maxNumberOfBalloons2 = function (text) {
  let dec = { b: 0, a: 0, l: 0, o: 0, n: 0 };
  for (let i = 0; i < text.length; i++) {
    if (dec[text[i]] || dec[text[i]] == 0) {
      if (text[i] == "l" || text[i] == "o") {
        dec[text[i]] += 0.5;
      } else {
        dec[text[i]] += 1;
      }
    }
  }
  return Math.floor(Math.min(...Object.values(dec)));
};

let text = "leetcode";
console.log(maxNumberOfBalloons(text));
