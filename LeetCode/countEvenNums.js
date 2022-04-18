var countEven = function (num) {
  let count = 0;
  for (let i = 2; i <= num; i++) {
    if (countDigits(i) % 2 === 0) {
      count++;
    }
  }
  return count;
};

function countDigits(num) {
  num = num.toString().split("");
  return num.reduce((acc, digit) => Number(acc) + Number(digit));
}

let num = 30;
console.log(countEven(num));
