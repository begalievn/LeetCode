const uncommonFromSentences = function (s1, s2) {
  const res = [];
  s1 = s1.split(" ");
  s2 = s2.split(" ");
  let s1Obj = {};
  let s2Obj = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1Obj[s1[i]]) {
      s1Obj[s1[i]] += 1;
    } else {
      s1Obj[s1[i]] = 1;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (s2Obj[s2[i]]) {
      s2Obj[s2[i]] += 1;
    } else {
      s2Obj[s2[i]] = 1;
    }
  }

  for (let i = 0; i < s1.length; i++) {
    if (s1Obj[s1[i]] === 1) {
      let condition = true;
      for (let j = 0; j < s2.length; j++) {
        if (s1[i] == s2[j]) {
          condition = false;
          break;
        }
      }
      if (condition) {
        res.push(s1[i]);
      }
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (s2Obj[s2[i]] === 1) {
      let condition = true;
      for (let j = 0; j < s1.length; j++) {
        if (s2[i] == s1[j]) {
          condition = false;
          break;
        }
      }
      if (condition) {
        res.push(s2[i]);
      }
    }
  }

  return res;
};

let s1 = "apple apple",
  s2 = "banana";
console.log(uncommonFromSentences(s1, s2));
