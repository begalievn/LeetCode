function minTimeToType(word) {
  word = word.split('');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alpArr = alphabet.split('');
  const alpLength = 26;
  let result = 0;
  const writingTime = 1;
  const middleIndex = 12;
  let pivotPoint = 0;
  let i = 0;
  while (i < word.length) {
    let targetIndex = alpArr.indexOf(word[i]);
    // Write here

    result += writingTime;

    let difference = Math.abs(targetIndex - pivotPoint);
    if (pivotPoint <= middleIndex) {
      if (difference <= middleIndex) {
        result += difference;
      } else {
        result += pivotPoint + (alpLength - targetIndex);
      }
    } else {
      if (difference <= middleIndex) {
        result += difference;
      } else {
        result += alpLength - pivotPoint + targetIndex;
      }
    }
    pivotPoint = targetIndex;
    // -----------------------
    i++;
  }

  return result;
}

let word = 'zjpc';
minTimeToType(word);
