const minimumSum = (num) => {
  let arr = num.toString().split("").sort();
  let firstNum = "";
  let secondNum = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      firstNum += arr[i];
    } else {
      secondNum += arr[i];
    }
  }

  return Number(firstNum) + Number(secondNum);
};

let num = 4009;
console.log(minimumSum(num));
