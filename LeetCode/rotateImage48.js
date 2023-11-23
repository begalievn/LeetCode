const rotate = function (matrix) {
  matrix = matrix.reverse();
  return matrix.reduce((acc, next, i, array) => {
    const arr = array.reduce((acc, item) => {
      const ai = item.filter((item, index) => {
        if (index === i) {
          return item;
        }
      });
      return acc.concat(ai);
    }, []);
    console.log(arr);
  }, []);
};

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

rotate(matrix);
