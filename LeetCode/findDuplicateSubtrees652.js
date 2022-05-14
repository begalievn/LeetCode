var findDuplicateSubtrees = function (root) {
  const map = new Map(),
    res = [];
  dfs(root, map, res);
  return res;
};

function dfs(root, map, res) {
  if (!root) return "#";
  const subtree = `${root.val}.${dfs(root.left, map, res)}.${dfs(
    root.right,
    map,
    res
  )}`;
  map.set(subtree, (map.get(subtree) || 0) + 1);
  if (map.get(subtree) === 2) {
    res.push(root);
  }
  return subtree;
}

class Node {
  constructor(val) {
    (this.val = val), (this.left = null), (this.right = null);
  }
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("b");
let h = new Node("d");

a.left = b;
a.right = c;
b.left = d;
c.left = f;
f.left = g;
g.left = h;

console.log(findDuplicateSubtrees(a));
