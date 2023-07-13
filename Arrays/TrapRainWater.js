/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let maxLeftArr = [];
    let maxRightArr = [];
    let sum = 0;
    for (let i = 0; i < height.length; i++){
        if (i === 0 || maxLeftArr[i-1]<height[i]) {
            maxLeftArr.push(height[i]);
        }
        else {
            maxLeftArr.push(maxLeftArr[i - 1]);
        }
    }
    for (let i = height.length - 1; i >= 0; i--) {
      if (i===height.length-1 || maxRightArr[i+1] < height[i]) {
        maxRightArr[i]=height[i];
      } else {
          maxRightArr[i] = maxRightArr[i + 1];
      }
    }
    for (let i = 0; i < height.length; i++){
        sum += Math.max(0, Math.min(maxLeftArr[i], maxRightArr[i]) - height[i]);
    }
    return sum;
};

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));