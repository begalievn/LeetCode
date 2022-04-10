const shortestToChar = (s, c) => {
  let answer = [];
  let cArr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      cArr.push(i);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      answer.push(0);
    } else {
      let min = s.length + 1;
      for (let j = 0; j < cArr.length; j++) {
        let indexOfC = cArr[j];
        if (Math.abs(indexOfC - i) < min) {
          min = Math.abs(indexOfC - i);
        }
      }
      answer.push(min);
    }
  }

  return answer;
};

let s = "aaba",
  c = "b";
console.log(shortestToChar(s, c));
