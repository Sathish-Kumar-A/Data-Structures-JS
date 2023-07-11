/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // let count=0;
    // if (nums.length === 1 && nums[0] === val) {
    //     nums.length -= 1;
    // }
    // // console.log(nums);
    // else {
        let i = 0;
        let j = nums.length - 1;
        while (i <= j) {
          if (nums[i] === val && nums[j] !== val) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
            nums.length -= 1;
          } else if (nums[j] === val) {
            j--;
            nums.length -= 1;
          } else {
            i++;
          }
        }
//   }
    // return nums
  // for(let j=1;j<nums.length;j++){
  //     if((nums[i]===val) && (nums[j]!==val)){

  //         i++;
  //     }
  // }
  // console.log(nums)
  // return nums.sort((a,b)=>a-b);
};

console.log(removeElement([3],3));