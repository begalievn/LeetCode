var bitwiseComplement = function (n) {
  return parseInt(
    n
      .toString(2)
      .split("")
      .map((item) => (item == "1" ? "0" : "1"))
      .join(""),
    2
  );
};

let n = 10;
console.log(bitwiseComplement(n));
