var sumNumbers = function (root) {
  return runner(root, 0);
};

function runner(node, num) {
  if (node === null) return 0;

  let carry = num * 10 + node.val;
  if (node.right === null && node.left === null) return carry;

  return runner(node.left, carry) + runner(node.right, carry);
}
