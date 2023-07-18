/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let i = 0;
  let j = 0;
  sum = 0;
  minLen = Infinity;
//   while ((i <= j) &&( j < nums.length)) {
//     if (sum >= target) {
//         minLen = Math.min(minLen, (j - i));
//         console.log(minLen);
//         sum -= nums[i];
//         i++;
//     } else {
//     sum += nums[j];
//       j++;
//     }
//   }
//   return minLen === Infinity ? 0 : minLen;

    while ((i <= j) && (j<nums.length)) {
        sum += nums[j];
        while (sum >= target) {
            minLen = Math.min(minLen, (j - i) + 1);
            sum -= nums[i];
            i++;
        }
        j++;
    }
    return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen(11, [1,2,3,4,5]));