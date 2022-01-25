var isToeplitzMatrix = function (matrix) {
  let condition = true;
  let m = matrix.length;
  let n = matrix[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < m; j++) {}
  }
};

let matrix = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2],
];
console.log(isToeplitzMatrix(matrix));
