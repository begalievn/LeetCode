var sortByBits = function (arr) {
  arr.sort((a, b) => a - b);
  arr.sort((a, b) => countBits(a) - countBits(b));
  return arr;
};

const countBits = (number) => {
  let result = number.toString(2);
  // console.log(number.toString(2));
  result = result
    .split('')
    .reduce((acc, bit) => (bit === '1' ? acc + Number(bit) : acc), 0);

  return result;
};

const sortByBits2 = (arr) => {
  const map = {};

  for (let num of arr) {
    let counter = 0,
      item = n;

    while (item > 0) {
      counter += item & 1;
      item = item >> 1;
    }

    map[n] = counter;
  }

  return arr.sort((a, b) => map[a] - map[b] || a - b);
};

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

sortByBits(arr);
