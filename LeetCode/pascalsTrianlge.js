var generate = function (numRows) {
  let res = [];
  res.push([1]);
  res.push([1, 1]);
  if (numRows === 1) {
    return [[1]];
  } else if (numRows === 2) {
    return res;
  } else {
    for (let i = 0; i < numRows - 2; i++) {
      let last = res[res.length - 1];
      let row = [1];

      for (let j = 0; j < last.length - 1; j++) {
        row.push(last[j] + last[j + 1]);
      }
      row.push(1);

      res.push(row);
    }
  }
  return res;
};

console.log(generate(5));
