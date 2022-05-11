var pathSum = function (root, targetSum) {
  const output = [];
  if (!root) return [];

  function helper(root, path, sum) {
    path.push(root.val);
    sum += root.val;

    if (!root.left && !root.right && sum === targetSum) {
      output.push([...path]);
      return;
    }
    if (root.left) helper(root.left, [...path], sum);
    if (root.right) helper(root.right, [...path], sum);
  }

  helper(root, [], 0);

  return output;
};
