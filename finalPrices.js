var finalPrices = function (prices) {
  let res = [];
  for (let i = 0; i < prices.length; i++) {
    let condition = true;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        res.push(prices[i] - prices[j]);
        condition = false;
        break;
      }
    }
    if (condition) {
      res.push(prices[i]);
    }
  }

  return res;
};

let prices = [10, 1, 1, 6];
console.log(finalPrices(prices));
