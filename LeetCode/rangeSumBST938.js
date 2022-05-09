// var rangeSumBST = function (root, low, high) {
//   if (root === null) return 0;
//   let res = 0;
//   const stack = [root];

//   while (stack.length > 0) {
//     const current = stack.pop();

//     if (current.val >= low && current <= high) {
//       res += current.val;
//     }

//     if (current.left) stack.push(current.left);
//     if (current.right) stack.push(current.right);
//   }

//   return res;
// };

var rangeSumBST = function (root, low, high) {
  if (root === null) return 0;
  let res = 0;

  res +=
    root.val >= low && root.val <= high && root.val !== null ? root.val : 0;
  let leftValues = rangeSumBST(root.left);
  let rightValues = rangeSumBST(root.right);

  return res + leftValues + rightValues;
};
