var fizzBuzz = function (n) {
  const result = new Array(n);
  while (n > 0) {
    if (n % 3 === 0 && n % 5 === 0) {
      result[n - 1] = "FizzBuzz";
    } else if (n % 3 === 0) {
      result[n - 1] = "Fizz";
    } else if (n % 5 === 0) {
      result[n - 1] = "Buzz";
    } else {
      result[n - 1] = `${n}`;
    }

    n--;
  }

  return result;
};

let n = 15;
console.log(fizzBuzz(n));
