var isUnivalTree = function (root) {
  let condition = [];
  if (root === null) return false;
  let uniValue = root.val;

  triverse(root, uniValue, condition);
  return condition.length > 0 ? false : true;
};

function triverse(root, uniValue, condition) {
  if (root.val !== uniValue) {
    condition.push(0);
  }

  if (root.left) triverse(root.left, uniValue, condition);
  if (root.right) triverse(root.right, uniValue, condition);
}
