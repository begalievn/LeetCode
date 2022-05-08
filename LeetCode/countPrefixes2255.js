var countPrefixes = function (words, s) {
  let res = 0;
  words.forEach((word) => {
    if (s.slice(0, word.length) === word) {
      res++;
    }
  });
  return res;
};

let words = ["a", "a"],
  s = "aa";
console.log(countPrefixes(words, s));
