const myFunc = (arr) => {
  arr.forEach((item) => {
    console.log(item + 1);
  });
};

const simpleFun = () => myFunc([1, 2, 3]);

console.log(simpleFun());
