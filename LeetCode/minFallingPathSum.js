const minFallingPathSum = (matrix) => {
  let arrOffallings = [];
  const n = matrix.length;
  let maxFall = 0;
  for (let i = 0; i < n; i++) {
    let currentSum = 0;
    for (let j = 0; j < n; j++) {
      currentSum += matrix[j][i];
      console.log(matrix[j][i]);
    }
    arrOffallings.push(currentSum);
  }
  return arrOffallings;
};

let matrix = [
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9],
];
console.log(minFallingPathSum(matrix));
