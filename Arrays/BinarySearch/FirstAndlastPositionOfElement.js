/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
//   let start = 0;
//   let end = nums.length - 1;
    let ans = [-1, -1];
    // ? My solution
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (nums[mid] === target) {
//       ans = [mid, mid];
//       return findFirstAndLast(mid, target, nums, ans);
//     } else if (nums[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
    // ? Optimized Solution
    let leftIndex = binarySearch(nums, target, true);
    if (leftIndex === nums.length || nums[leftIndex] !== target) {
        return ans;
    }
    ans[0] = leftIndex;
    ans[1] = binarySearch(nums, target, false)-1;
  return ans;
};

function findFirstAndLast(mid, target, nums, ans) {
  let i = mid - 1;
  let j = mid + 1;
  while (i >= 0 || j < nums.length) {
    if (nums[i] === target) {
      ans[0] = i;
    }
    if (nums[j] === target) {
      ans[1] = j;
    }
    i--;
    j++;
  }
  return ans;
}


function binarySearch(nums,target,isProceedingLeft) {
    let start = 0;
    let end = nums.length;
    while (start <end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] > target || (isProceedingLeft && nums[mid] === target)) {
            end = mid;
        }
        else {
            start = mid + 1;
        }
    }
    return start;
}

console.log(searchRange([3,3,3,3],3));