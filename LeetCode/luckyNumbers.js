const luckyNumbers = (matrix) => {
  let resArr = [];
  for (let i = 0; i < matrix.length; i++) {
    let minNumInRow = Math.min(...matrix[i]);
    let minNumIndex = matrix[i].indexOf(minNumInRow);
    let condition = true;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][minNumIndex] > minNumInRow) {
        condition = false;
        break;
      }
    }
    if (condition) {
      resArr.push(minNumInRow);
    }
  }
  return resArr;
};

let matrix = [
  [7, 8],
  [1, 2],
];
console.log(luckyNumbers(matrix));
