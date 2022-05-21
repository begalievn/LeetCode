var islandPerimeter = function (grid) {
  let res = 0;
  let length = grid.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        res += 4;
        // top
        if (grid[i - 1] && grid[i - 1][j]) {
          res--;
        }
        // bottom
        if (grid[i + 1] && grid[i + 1][j]) {
          res--;
        }
        // left
        if (grid[i][j - 1]) {
          res--;
        }
        // right
        if (grid[i][j + 1]) {
          res--;
        }
      }
    }
  }

  return res;
};

let grid = [[1, 0]];
console.log(islandPerimeter(grid));
