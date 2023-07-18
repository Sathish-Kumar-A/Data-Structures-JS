/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // Two Pointer Approach
  // let i=0;
  // let n=nums.length-1;
  // let j=nums.length-1;
  // while(i<=j){
  //     if(nums[i]===target ){
  //         return i;
  //     }
  //     if(nums[j]==target){
  //         return j;
  //     }
  //     i++;
  //     j--;
  // }
  // return -1;

  // Binary search
  let l = 0;
  let h = nums.length-1;
    while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (target === nums[mid]) return mid;
    // Left sorted
    if (nums[l] <= nums[mid]) {
      if (target < nums[mid] && target >= nums[l]) {
        h = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    // Right Sorted
    else {
      if (target > nums[mid] && target <= nums[h]) {
        l = mid + 1;
      } else {
        h = mid - 1;
      }
    }
  }
  return -1;
};


console.log(search([4,5,6,7,0,1,2],0));