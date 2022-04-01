const restoreMatrix = (rowSum, colSum) => {
  const lenR = rowSum.length;
  const lenC = colSum.length;
  let matrix = [];

  for (let i = 0; i < lenR; i++) {
    let row = [];
    for (let j = 0; j < lenC; j++) {
      let x = Math.min(rowSum[i], colSum[j]);
      row.push(x);

      rowSum[i] -= x;
      colSum[j] -= x;
    }
    matrix.push(row);
  }

  return matrix;
};

let rowSum = [14, 9],
  colSum = [6, 9, 8];
console.log(restoreMatrix(rowSum, colSum));
