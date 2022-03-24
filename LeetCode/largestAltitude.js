var largestAltitude = function (gain) {
  let highest = 0;
  let altitude = 0;
  for (let i = 0; i < gain.length; i++) {
    altitude += gain[i];
    if (altitude > highest) {
      highest = altitude;
    }
  }

  return highest;
};
