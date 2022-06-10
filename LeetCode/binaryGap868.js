var binaryGap = function (n) {
  let binary = n.toString(2);
  console.log(binary);
  let result = 0;
  let sp = -1;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      if (sp !== -1) {
        if (i - sp > result) {
          result = i - sp;
        }
      }
      sp = i;
    }
  }

  return result;
};

let n = 5;

console.log(binaryGap(n));
