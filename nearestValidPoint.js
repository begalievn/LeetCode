var nearestValidPoint = function (x, y, points) {
  let smallestDistance = Number.MAX_VALUE;
  let index = -1;
  for (let i = 0; i < points.length; i++) {
    let currentDistance = 0;
    let currentX = points[i][0];
    let currentY = points[i][1];

    if (x === currentX || y === currentY) {
      currentDistance = Math.abs(x - currentX) + Math.abs(y - currentY);
      if (currentDistance < smallestDistance) {
        smallestDistance = currentDistance;
        index = i;
      }
    }
  }
  return index;
};

// The Manhattan Distance between two points (X1, Y1) and (X2, Y2) is given by |X1 – X2| + |Y1 – Y2|.

let x = 3,
  y = 4,
  points = [[2, 3]];
console.log(nearestValidPoint(x, y, points));
