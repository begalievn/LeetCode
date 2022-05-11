const binaryTreePaths = (root) => {
  const output = [];

  function helper(root, arr) {
    if (!root) return [];

    arr.push(root.val);

    if (!root.left && !root.right) {
      output.push([...arr]);
    }

    if (root.left) helper(root.left, [...arr]);
    if (root.right) helper(root.right, [...arr]);
  }
  let arr = [];
  helper(root, arr);
  let output2 = output.map((arr) => arr.join("->"));
  return output2;
};

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

a.left = b;
a.right = c;
b.left = d;
c.left = f;

console.log(binaryTreePaths(a));
