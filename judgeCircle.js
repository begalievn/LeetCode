var judgeCircle = function (moves) {
  let coordinates = [0, 0];

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] == "U") {
      coordinates[1]++;
    } else if (moves[i] == "D") {
      coordinates[1]--;
    } else if (moves[i] == "R") {
      coordinates[0]++;
    } else if (moves[i] == "L") {
      coordinates[0]--;
    }
  }
  return coordinates[0] == 0 && coordinates[1] == 0 ? true : false;
};

let moves = "UDDLRU";

console.log(judgeCircle(moves));
