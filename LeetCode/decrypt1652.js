var decrypt = (code, k) => {
  const result = [];
  for (let i = 0; i < code.length; i++) {
    if (k === 0) {
      result.push(0);
      continue;
    }

    let current = 0;
    if (k > 0) {
      for (let j = 1; j <= k; j++) {
        if (i + j < code.length) {
          current += code[i + 1];
        } else {
          current += code[code.length - (i + 1) - 1];
        }
      }
    }
    result.push(current);
  }
};

let code = [5, 7, 1, 4],
  k = 3;
console.log(decrypt(code, k));
