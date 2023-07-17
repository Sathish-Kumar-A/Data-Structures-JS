/**
 * @param {number[]} height
 * @return {number}
 */

// * Leetcode 42
var trap = function (height) {
    // ? Finding minarray and maxarray
    // let maxLeftArr = [];
    // let maxRightArr = [];
    // let sum = 0;
    // for (let i = 0; i < height.length; i++){
    //     if (i === 0 || maxLeftArr[i-1]<height[i]) {
    //         maxLeftArr.push(height[i]);
    //     }
    //     else {
    //         maxLeftArr.push(maxLeftArr[i - 1]);
    //     }
    // }
    // for (let i = height.length - 1; i >= 0; i--) {
    //   if (i===height.length-1 || maxRightArr[i+1] < height[i]) {
    //     maxRightArr[i]=height[i];
    //   } else {
    //       maxRightArr[i] = maxRightArr[i + 1];
    //   }
    // }
    // for (let i = 0; i < height.length; i++){
    //     sum += Math.max(0, Math.min(maxLeftArr[i], maxRightArr[i]) - height[i]);
    // }
    // return sum;

    // ? Optimized solution

    let left = 0;
    let right = height.length - 1;
    let maxLeft = height[0];
    let maxRight = height[right];
    let trappedWater = 0;
    while (left < right) {
      if (maxLeft < maxRight) {
        left++;
        maxLeft = Math.max(maxLeft, height[left]);
        trappedWater += maxLeft - height[left];
      } else {
        right--;
        maxRight = Math.max(maxRight, height[right]);
        trappedWater += maxRight - height[right];
      }
    }
    return trappedWater;
};

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));