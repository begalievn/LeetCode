var average = function (salary) {
  let max = 0;
  let min = 1000001;
  let res = 0;
  for (let i = 0; i < salary.length; i++) {
    if (salary[i] > max) {
      max = salary[i];
    }
    if (salary[i] < min) {
      min = salary[i];
    }
    res += salary[i];
  }
  res = res - min - max;

  return res / (salary.length - 2);
};

let salary = [4000, 3000, 1000, 2000];
console.log(average(salary));
