/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// ! leetcode - 40
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    // console.log({ candidates });
    let result = [];
    findCombinations(0, [], target, result, candidates);
    // console.log({result});
    return

};

const findCombinations = (index, ds, target, result, arr) => {
    if (target === 0) {
        result.push([...ds]);
        return;
    }
    for (let i = index; i < arr.length; i++){
        if (i > index && (arr[i] === arr[i - 1])) continue;
        if (arr[i] > target) break;
        ds.push(arr[i]);
        findCombinations(i + 1, ds, target - arr[i], result, arr);
        ds.pop();
    }
    // if (index >= arr.length) {
    //     return;
    // }
    // if (arr[index] <= target) {
    //     ds.push(arr[index]);
    //     findCombinations(index+1, ds, target - arr[index], result, arr);
    //     ds.pop();
    // }
    // findCombinations(index+1, ds, target, result, arr);

}

combinationSum2([10, 1, 2, 7, 6, 1, 5],8);