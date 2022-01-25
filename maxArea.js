var maxArea = function (height) {
  let max = 0;
  if (height.length <= 2) {
    return Math.min(height[0], height[1]) * 1;
  }
  for (let i = 0; i < height.length; i++) {
    let current = 0;
    for (let j = i + 1; j < height.length; j++) {
      current = Math.min(height[i], height[j]) * (j - i);
      if (current > max) {
        max = current;
      }
    }
  }
  return max;
};

function maxArea2(height) {
  let area = 0;
  let left = 0,
    right = height.length - 1;
  while (left < right) {
    let current = Math.min(height[left], height[right]) * (right - left);
    if (current > area) {
      area = current;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return area;
}

let height = [1, 1];
console.log(maxArea2(height));
