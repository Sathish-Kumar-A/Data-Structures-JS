/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  nums.sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;
  let count = 0;
  while (i < j) {
    let sum = nums[i] + nums[j];
    if (sum < target) {
      count++;
      while (i < j && j < nums.length - 1 && nums[j] === nums[j - 1]) {
        console.log(j);
        j--;
      }
    } else {
      i++;
      j--;
    }
  }
  return count;
};

console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2));