var commonChars = function (words) {
  let res = [];
  for (let i = 0; i < words[0].length; i++) {
    let condition = true;
    for (let j = 1; j < words.length; j++) {
      if (words[j].includes(words[0][i])) {
        words[j] = words[j].replace(words[0][i], "");
      } else {
        condition = false;
        break;
      }
    }
    if (condition) {
      res.push(words[0][i]);
    }
  }

  return res;
};

let words = ["cool", "lock", "cook"];
console.log(commonChars(words));
