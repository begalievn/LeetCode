const isSameAfterReversals = (num) => {
  let reversedNum = +(+String(num).split("").reverse().join(""))
    .toString()
    .split("")
    .reverse()
    .join("");

  if (reversedNum === num) {
    return true;
  }
  return false;
};

let num = 15600;
console.log(isSameAfterReversals(num));
