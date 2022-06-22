var buildArray = function (target, n) {
  let result = [];
  let i = 0;
  let number = 1;
  while (number <= target[target.length - 1]) {
    if (target[i] === number) {
      result.push('Push');
      i++;
      number++;
    } else {
      result.push('Push');
      result.push('Pop');
      number++;
    }
  }

  return result;
};

let target = [1, 2],
  n = 4;
console.log(buildArray(target, n));
