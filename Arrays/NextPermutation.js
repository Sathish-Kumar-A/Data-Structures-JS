/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let isReverse = true;
  let GivenCondition = JSON.stringify(nums);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      isReverse = false;
      break;
    }
  }
    if (isReverse) return nums.reverse();
    
  optimizedSwapPermutation(0, nums, );
  return nums;
};

function optimizedSwapPermutation(index, arr, result) {
  if (index === arr.length) {
    result.push([...arr]);
    return;
  }
  for (let i = index; i < arr.length; i++) {
    if (i > index && arr[i] === arr[i - 1]) continue;
    [arr[index], arr[i]] = [arr[i], arr[index]];
    optimizedSwapPermutation(index + 1, arr, result);
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }
}

console.log(nextPermutation([1,2,3]));