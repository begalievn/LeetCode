const partitionLabels = (s) => {
  let arrOfLastChars = new Array(26).fill(null);
  for (let i = 0; i < s.length; i++) {
    arrOfLastChars[s.charCodeAt(i) - 97] = i;
  }

  const resultArr = [];
  let anchor = 0,
    j = 0;
  for (let i = 0; i < s.length; i++) {
    j = Math.max(j, arrOfLastChars[s.charCodeAt(i) - 97]);
    if (i === j) {
      resultArr.push(i - anchor + 1);
      anchor = i + 1;
    }
  }

  return resultArr;
};

let s = "eccbbbbdec";
console.log(partitionLabels(s));
