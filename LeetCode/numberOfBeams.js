const numberOfBeams = (bank) => {
  let beams = 0;
  let len = bank.length;

  for (let i = 0; i < len - 1; i++) {
    let currentFloor = bank[i];
    for (let k = i + 1; k < len; k++) {
      let condition = false;
      let floor = bank[k];
      for (let a = 0; a < floor.length; a++) {
        for (let c = 0; c < floor.length; c++) {
          if (floor[c] == 1 && currentFloor[a] == floor[c]) {
            beams++;
            condition = true;
          }
        }
      }
      if (condition) {
        break;
      }
    }
  }

  return beams;
};

const numberOfBeams2 = (bank) => {
  let beams = 0;
  let arrQuantityOfBeams = [];
  let len = bank.length;
  for (let i = 0; i < len; i++) {
    let count = 0;
    let floor = bank[i];
    for (let d = 0; d < floor.length; d++) {
      if (floor[d] == "1") {
        count++;
      }
    }
    if (count > 0) {
      arrQuantityOfBeams.push(count);
    }
  }

  for (let i = 0; i < arrQuantityOfBeams.length - 1; i++) {
    beams += arrQuantityOfBeams[i] * arrQuantityOfBeams[i + 1];
  }

  return beams;
};

let bank = ["011001", "000000", "010100", "001000"];
console.log(numberOfBeams2(bank));
