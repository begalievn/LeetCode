var minCostClimbingStairs = function (cost) {
  let res = 0;
  let res2 = 0;
  for (let i = 0; i < cost.length - 1; ) {
    if (cost[i] < cost[i + 1]) {
      res += cost[i];
      i++;
    } else {
      res += cost[i + 1];
      i += 2;
    }
  }

  for (let i = 1; i < cost.length - 1; ) {
    if (cost[i] < cost[i + 1]) {
      res2 += cost[i];
      i++;
    } else {
      res2 += cost[i + 1];
      i += 2;
    }
  }

  return Math.min(res, res2);
};

let cost = [10, 15, 20];
console.log(minCostClimbingStairs(cost));
