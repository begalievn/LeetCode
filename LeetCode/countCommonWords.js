var countWords = function (words1, words2) {
  let result = 0;
  words1 = findUniqValues(words1);
  words2 = findUniqValues(words2);

  let [arr1, arr2] =
    words1.length < words2.length ? [words1, words2] : [words2, words1];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        result++;
      }
    }
  }

  return result;
};

function findUniqValues(words) {
  let obj = {};
  words.forEach((word) => {
    if (obj[word]) {
      obj[word]++;
    } else {
      obj[word] = 1;
    }
  });

  return Object.keys(obj).filter((key) => obj[key] === 1);
}

function countCommons(arr1, arr2) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        count++;
      }
    }
  }
  return count;
}
let words1 = ["leetcode", "is", "amazing", "as", "is"],
  words2 = ["amazing", "leetcode", "is"];
console.log(countWords(words1, words2));
