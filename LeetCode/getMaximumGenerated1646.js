var getMaximumGenerated = function (n) {
  if (n < 1) return 0;
  let answer = 0;
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 1; i < n + 1; i++) {
    arr[i] =
      i % 2 === 0
        ? arr[Math.floor(i / 2)]
        : arr[Math.floor(i / 2)] + arr[Math.floor(i / 2 + 1)];
    answer = Math.max(arr[i], answer);
  }
  return answer;
};

let n = 3;
console.log(getMaximumGenerated(n));
