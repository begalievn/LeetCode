var minSteps = function (s, t) {
  let steps = t.length;
  s = s.split("");
  t = t.split("");

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[j]) {
        t[j] = null;
        steps--;
        break;
      }
    }
  }
  return steps;
};

var minSteps2 = function (s, t) {
  var s_arr = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    s_arr[s[i].charCodeAt(0) - 97]++;
  }
  for (let i = 0; i < t.length; i++) {
    var charIndex = t[i].charCodeAt(0) - 97;
    if (s_arr[charIndex] > 0) {
      s_arr[charIndex]--;
    }
  }
  return s_arr.reduce((a, b) => a + b);
};

let s = "leetcode",
  t = "practice";
console.log(minSteps2(s, t));
