const cellsInRange = (s) => {
  let letters = [s.charCodeAt(0), s.charCodeAt(3)];
  let numbers = [Number(s[1]), Number(s[4])];
  let res = [];

  for (let i = letters[0]; i <= letters[1]; i++) {
    for (let j = numbers[0]; j <= numbers[1]; j++) {
      let cell = String.fromCharCode(i) + j;
      res.push(cell);
    }
  }

  return res;
};

let s = "K1:L2";
console.log(cellsInRange(s));
