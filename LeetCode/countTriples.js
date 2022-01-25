var countTriples = function (n) {
  let res = 0;
  for (let i = n; i >= 5; i--) {
    let a = 1,
      b = i - 1,
      c = i;
    while (a <= b) {
      if (a ** 2 + b ** 2 === c ** 2) {
        res += 2;
        a++;
        continue;
      } else if (a ** 2 + b ** 2 < c ** 2) {
        a++;
      } else {
        b--;
      }
    }
  }
  return res;
};

let n = 52;
console.log(countTriples(n));
