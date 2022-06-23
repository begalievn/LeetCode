var greatestLetter = function (s) {
  let obj = {};
  let lettersArray = [];
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (obj[letter.toLowerCase()]) {
      if (!obj[letter.toLowerCase()].includes(letter)) {
        obj[letter.toLowerCase()].push(letter);
        if (obj[letter.toLowerCase()].length === 2) {
          lettersArray.push(letter.toUpperCase());
        }
      }
    } else {
      obj[letter.toLowerCase()] = [letter];
    }
  }
  lettersArray.sort();
  if (lettersArray.length === 0) {
    return '';
  }
  return lettersArray[lettersArray.length - 1];
};

let s = 'AbCdEfGhIjK';

console.log(greatestLetter(s));
