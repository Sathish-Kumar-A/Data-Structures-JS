/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = Array(nums.length).fill(-1);
  return selectingHouses(0, nums,dp);
};

// * Recursive Solution

function selectingHouses(index, nums, dp) {
  if (index > nums.length-1) {
    return 0;
  }
  if (index === nums.length - 1) {
    return nums[index]
  }
  if(dp[index]!==-1) return dp[index]
  // if (index >= nums.length) {
  //   return 0;
  // }
  let pick = nums[index] + selectingHouses(index + 2, nums,dp);
  let notPick = selectingHouses(index + 1, nums,dp);
  dp[index] = Math.max(pick, notPick);
  return dp[index]
}

// console.log(rob([2, 7, 9, 3, 1]));

// * Optimized tabulation Solution

function optimizedSolution(nums){
  let prev = 0;
  let prev2 = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++){
    let take = nums[i];
    if (i > 1) {
      take += prev2;
    }
    let notTake = 0 + prev;
    let current = Math.max(take, notTake);
    prev2 = prev;
    prev = current;
  }
  return prev;
}

console.log(
  optimizedSolution([
    114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223, 58, 170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197, 187, 69, 129, 64, 214, 228, 78, 188, 67, 205, 94,
    205, 169, 241, 202, 144, 240,
  ])
);