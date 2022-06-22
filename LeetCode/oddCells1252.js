var oddCells = function (m, n, indices) {
  let matrix = new Array(m).fill(new Array(n).fill(0));

  return matrix;
};

function addHorizontal(matrix, index) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[index][i] += 1;
    console.log('Value in the index horizontal', matrix[index][i]);
  }
}

function addVertical(matrix, index) {
  for (let i = 0; i < matrix[index].length; i++) {
    matrix[i][index] += 1;
    console.log('Value in the index vertical: ', matrix[i][index]);
  }
}

const oddCells2 = (m, n, indices) => {
  let matrix = [];
  let output = 0;
  for (let i = 0; i < m; i++) {
    matrix.push(Array(n).fill(0));
  }

  for (let [x, y] of indices) {
    // INCREMENT ROW

    for (let i = 0; i < n; i++) {
      matrix[x][i]++;
    }
    // INCREMENT COULMN
    for (let i = 0; i < m; i++) {
      matrix[i][y]++;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach((num) => {
      if (num % 2 !== 0) {
        output++;
      }
    });
  }
  return output;
};

const oddCells3 = (m, n, indices) => {
  let matrix = new Array(m).fill(new Array(n).fill(0));
  let result = 0;
  for (let i = 0; i < indices.length; i++) {
    let x = indices[i][0];
    let y = indices[i][1];

    for (let j = 0; j < n; j++) {
      matrix[x][j]++;
    }

    for (let j = 0; j < m; j++) {
      matrix[j][y]++;
    }
  }

  return matrix;
};

let m = 2,
  n = 3,
  indices = [
    [0, 1],
    [1, 1],
  ];

console.log(oddCells2(m, n, indices));
