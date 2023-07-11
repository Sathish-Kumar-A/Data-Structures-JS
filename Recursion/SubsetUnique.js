/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// * Leetcode 78, 90
var subsetsWithDup = function (nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    subsets(0, [], nums, result);
    return result;
 };


function subsets(index, ds, arr, result) {
    result.push([...ds]);
    if (index >= arr.length) {
        return;
    }
    for (let i = index; i < arr.length; i++){
        if (i > index && arr[i] === arr[i - 1]) continue;
        ds.push(arr[i]);
        subsets(i + 1, ds, arr, result);
        ds.pop();
    }
}

console.log(subsetsWithDup([1,2,3]));
