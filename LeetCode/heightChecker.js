const heightChecker = (heights) => {
  let originalArray = heights.slice();
  let expected = heights.sort((a, b) => a - b);
  let countDiff = 0;
  for (let i = 0; i < heights.length; i++) {
    if (originalArray[i] != expected[i]) {
      countDiff++;
    }
  }
  return countDiff;
};

let heights = [1, 1, 4, 2, 1, 3];
console.log(heightChecker(heights));
