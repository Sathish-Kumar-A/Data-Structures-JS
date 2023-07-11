/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let ans = nums.length;
   let first = 0, last = nums.length - 1;
    
  while (first <= last) {
    let mid = Math.floor((last+first) / 2);
    if (nums[mid] === target) {
      return mid;
    }
     else if (target>nums[mid]) {
          first = mid + 1;
    }
    else {
        ans = mid; 
        last = mid - 1;
    }
  }
  return ans;
};

// console.log(searchInsert([1, 3, 5, 6], 2));