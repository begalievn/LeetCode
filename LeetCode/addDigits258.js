var addDigits = function (num) {
  while (String(num).length != 1) {
    num = String(num)
      .split("")
      .reduce((acc, item) => Number(acc) + Number(item));
  }
  return num;
};

function addDigits2(num) {
  let sum = 0;
  while (num > 9) {
    while (num != 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
    sum = 0;
  }

  return num;
}

const addDigits3 = (num) => {
  if (num === 0) return 0;
  return num % 9 === 0 ? 9 : num % 9;
};

let num = 38;
console.log(addDigits3(num));
