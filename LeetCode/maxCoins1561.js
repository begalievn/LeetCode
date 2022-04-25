var maxCoins = function (piles) {
  piles.sort((a, b) => b - a);
  let res = 0;
  let head = 1,
    tail = piles.length - 1;
  while (head < tail) {
    res += piles[head];
    head += 2;
    tail--;
  }
  return res;
};

let piles = [9, 8, 7, 6, 5, 1, 2, 3, 4];

console.log(maxCoins(piles));
