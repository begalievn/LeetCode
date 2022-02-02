var strStr = function (haystack, needle) {
  let res = -1;
  if (needle == "") {
    return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      let condition = true;
      for (j = 0; j < needle.length; j++) {
        if (haystack[i + j] != needle[j]) {
          condition = false;
        }
      }
      if (condition) {
        return i;
      }
    }
  }

  return res;
};

var strStr2 = function (haystack, needle) {
  if (haystack == needle || needle == "") {
    return 0;
  }
  if (needle.length > haystack.length) {
    return -1;
  }
  let res = -1;
  let nLength = needle.length;

  for (let i = 0; i <= haystack.length - nLength; i++) {
    if (haystack[i] == needle[0]) {
      if (haystack.substr(i, i + nLength - 1) === needle) {
        return i;
      }
    }
  }
  return res;
};

var strStr3 = function (haystack, needle) {
  if (needle == "" || haystack === needle) {
    return 0;
  } else if (needle.length > haystack.length) {
    return -1;
  }

  for (let left = 0, right = needle.length; right <= haystack.length; right++) {
    if (haystack.slice(left, right) === needle) {
      return left;
    }
    left++;
  }

  return -1;
};

let haystack = "hello",
  needle = "ll";
console.log(strStr3(haystack, needle));
