function countSmileys(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let smile = arr[i];
    if (![":", ";"].includes(smile[0])) {
      continue;
    } else if (![")", "D"].includes(smile[smile.length - 1])) {
      continue;
    } else if (smile.length > 2 && !["-", "~"].includes(smile[1])) {
      continue;
    } else {
      res++;
    }
  }

  return res;
}

function countSmileys2(arr) {
  let res = 0;
  let reg = /[:;][-~][)D]/;
  for (let i = 0; i < arr.length; i++) {
    if (reg.test(arr[i])) {
      res++;
    }
  }
  return res;
}

let arr = [";]", ":[", ";*", ":$", ";-D", ";--D"];

console.log(countSmileys2(arr));
