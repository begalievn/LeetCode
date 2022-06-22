const inorderTraversal = (root) => {
  if (root === null) return [];
  const leftValues = inorderTraversal(root.left);
  const rightValues = inorderTraversal(root.right);
  return [...leftValues, root.val, ...rightValues];
};
