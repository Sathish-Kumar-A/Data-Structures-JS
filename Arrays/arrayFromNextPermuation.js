/**
 * @param {number[]} nums
 * @return {number[]}
 */

// * Leetcode 1920
var buildArray = function (nums) {
    let i = 0;
    
    while (i < nums.length) {
    //   console.log(i,nums);
        // if (nums[i] !== i) {
        console.log(nums[i],nums[nums[i]]);
            // [nums[i], nums[nums[i]]] = [nums[nums[i]], nums[i]];
            let temp = nums[nums[i]];
            nums[nums[i]] = nums[i];
            nums[i] = temp;
            
        // console.log(nums[i], nums[nums[i]]);
            console.log(nums);
            console.log("------------");
    // } 
    i++;
  }
  return nums;
};

console.log(buildArray([5, 0, 1, 2, 3, 4]));
