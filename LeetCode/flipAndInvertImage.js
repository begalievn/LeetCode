var flipAndInvertImage = function (image) {
  let len = image.length;
  for (let i = 0; i < image.length; i++) {
    image[i] = invert(image[i], len);
  }

  return image;
};

const invert = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i] % 2 === 0 ? 1 : 0;
    arr[arr.length - 1 - i] = temp % 2 === 0 ? 1 : 0;
  }
  if (arr.length % 2 !== 0) {
    arr[Math.floor(arr.length / 2)] =
      arr[Math.floor(arr.length / 2)] % 2 === 0 ? 1 : 0;
  }

  return arr;
};

let image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

console.log(flipAndInvertImage(image));
