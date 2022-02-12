var maxDepthAfterSplit = function (seq) {
  const stackArr = [];
  const resArr = [];
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] == "(") {
      if (stackArr.slice(-1) == "(") {
        resArr.push(1);
      } else {
        resArr.push(0);
      }
      stackArr.push(seq[i]);
    } else if (seq[i] == ")") {
      if (stackArr.slice(-1) == "(") {
        stackArr.pop();
        if (stackArr.slice(-1) == "(") {
          resArr.push(1);
        } else {
          resArr.push(0);
        }
      } else {
        console.log("Not a VPS");
      }
    }
  }
  return resArr;
};

let seq = "()(())()";
console.log(maxDepthAfterSplit(seq));
