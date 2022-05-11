// var countNodes = function(root) {
//   if(!root) return 0;
//   let queue = [root];
//   let result = [];
//   while(queue.length){
//       let cur = queue.shift();
//       result.push(cur.val);
//       if(cur.left) queue.push(cur.left);
//       if(cur.right) queue.push(cur.right);
//   };

//   return result.length;
// };

const countNodes = (root) => {
  if (root === null) return 0;
  let queue = [root];
  let result = [];

  while (queue.length) {
    let cur = queue.shift();
    result.push(cur.val);

    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }

  return result.length;
};
