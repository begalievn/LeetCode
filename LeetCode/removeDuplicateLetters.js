var removeDuplicates = function (s) {
  for (let i = 0; i < s.length - 1; ) {
    if (s[i] === s[i + 1]) {
      s = s.replace(`${s[i]}${s[i]}`, "");

      i = i - 1;
    } else {
      i++;
    }
  }

  return s;
};

var removeDuplicates2 = function (s) {
  const stack = [];
  for (letter of s) {
    stack[stack.length - 1] === letter ? stack.pop() : stack.push(letter);
  }

  return stack.join("");
};

let s = "abbaca";
console.log(removeDuplicates2(s));
