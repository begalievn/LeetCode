var countCharacters = function (words, chars) {
  let res = 0;
  for (let i = 0; i < words.length; i++) {
    let arr = chars.split("");
    let condition = true;
    for (let j = 0; j < words[i].length; j++) {
      if (arr.includes(words[i][j])) {
        arr[arr.indexOf(words[i][j])] = " ";
      } else {
        condition = false;
        continue;
      }
    }
    if (condition) {
      res += words[i].length;
    }
  }
  return res;
};

let words = ["cat", "bt", "hat", "tree"],
  chars = "atach";
console.log(countCharacters(words, chars));
