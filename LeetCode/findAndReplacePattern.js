var findAndReplacePattern = function (words, pattern) {
  let res = [];
  let objPattern = {};
  patternKeys = Object.keys(objPattern);
  for (let i = 0; i < pattern.length; i++) {
    if (objPattern[pattern[i]]) {
      objPattern[pattern[i]] += 1;
    } else {
      objPattern = 1;
    }
  }

  for (let i = 0; i < words.length; i++) {
    let wordPattern = {};
    for (let j = 0; j < wordPattern; j++) {
      if (wordPattern[words[j]]) {
        wordPattern += 1;
      } else {
        wordPattern = 1;
      }
    }

    let wordKeys = Object.keys(wordPattern);
    if (wordKeys.length === patternKeys.length) {
      let condition = true;
      for (let c = 0; c < patternKeys.length; c++) {
        if (patternKeys[c] != wordKeys[c]) {
          condition = false;
        }
      }
      if (condition) {
        res.push(words[i]);
      }
    }
  }

  return res;
};

let words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"],
  pattern = "abb";
console.log(findAndReplacePattern(words, pattern));
