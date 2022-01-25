var checkAlmostEquivalent = function (word1, word2) {
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < word1.length; i++) {
    if (obj1.hasOwnProperty(word1[i])) {
      obj1[word1[i]] += 1;
    } else {
      obj1[word1[i]] = 1;
    }
  }

  for (let i = 0; i < word1.length; i++) {
    if (obj2.hasOwnProperty(word2[i])) {
      obj2[word2[i]] += 1;
    } else {
      obj2[word2[i]] = 1;
    }
  }

  let keys1 = Object.keys(obj1);
  for (let i = 0; i < keys1.length; i++) {
    let value1, value2;
    value1 = obj1[keys1[i]];
    if (obj2[keys1[i]] === undefined) {
      value2 = 0;
    } else {
      value2 = obj2[keys1[i]];
    }
    if (Math.abs(value1 - value2) > 3) {
      return false;
    }
  }

  let keys2 = Object.keys(obj2);
  for (let i = 0; i < keys1.length; i++) {
    let value1, value2;
    value1 = obj2[keys2[i]];
    if (obj1[keys2[i]] === undefined) {
      value2 = 0;
    } else {
      value2 = obj1[keys2[i]];
    }
    if (Math.abs(value1 - value2) > 3) {
      return false;
    }
  }

  return true;
};

let word1 = "zzzyyy",
  word2 = "iiiiii";
console.log(checkAlmostEquivalent(word1, word2));
