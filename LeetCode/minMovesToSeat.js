var minMovesToSeat = function (seats, students) {
  let res = 0;
  seats = seats.sort((a, b) => a - b);
  students = students.sort((a, b) => a - b);
  for (let i = 0; i < seats.length; i++) {
    res += Math.abs(seats[i] - students[i]);
  }
  return res;
};

let seats = [4, 1, 5, 9],
  students = [1, 3, 2, 6];
console.log(minMovesToSeat(seats, students));
