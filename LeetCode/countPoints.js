const countPoints = function (rings) {
  const rodArr = new Array(10).fill("");
  for (let i = 0; i < rings.length; i += 2) {
    if (!rodArr[rings[i + 1]].includes(rings[i])) {
      rodArr[rings[i + 1]] += rings[i];
    }
  }
  return rodArr.filter((item) => item.length == 3).length;
};

let rings = "G4";
console.log(countPoints(rings));
