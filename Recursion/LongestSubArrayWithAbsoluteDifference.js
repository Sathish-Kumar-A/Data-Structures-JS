/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {

    let result = [0];
    recursiveCombinations (0, [], limit, nums, result);
    console.log(result);
};

function recursiveCombinations(index, ds, limit, nums,result) {
    if (index >= nums.length) {
        return;
    }
    
    if (ds.length === 2) {
        if (Math.abs(ds[0] - ds[1]) <= limit) {
            console.log(ds);

            result[0] = Math.max(result[0], Math.abs(ds[0] - ds[1]));
        }
        return
    }
    // for (let i = index; i < nums.length; i++){
    //     ds.push(nums[i]);
    //     if()
    //     // ds.pop();
    //     return recursiveCombinations(index+1, ds, max, limit, nums);
    // }
    ds.push(nums[index]);
    recursiveCombinations(index + 1, ds, limit, nums,result);
    ds.pop();
    recursiveCombinations(index + 1, ds, limit, nums,result);
    // return max;
}

longestSubarray([8, 2, 4, 7],4);