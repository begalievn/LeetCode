let banknoteCount = function (num) {
  let banknotesArr = [100, 50, 20, 10, 5, 2, 1];
  let resArr = [0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < banknotesArr.length; i++) {
    resArr[i] = Math.floor(num / banknotesArr[i]);
    num = num % banknotesArr[i];
  }
  return resArr;
};

let num = 556;
console.log(banknoteCount(num));
