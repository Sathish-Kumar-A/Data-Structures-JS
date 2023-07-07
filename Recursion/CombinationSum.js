/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];
    combinations(0, target, [], candidates, result);
    console.log({result});
    return result;
};

function combinations(index, reqSum, ds, arr,result) {
    // console.log(arr[index], reqSum,"re",index,ds)
    if (reqSum===0) {
        // console.log([...ds, arr[index]]);
        result.push([...ds]);
        return
    }
    if (index >= arr.length) {
        return;
    }
    // reqSum -= arr[index];
    if (arr[index] <= reqSum) {
        ds.push(arr[index]);
        // console.log({reqSum});
        combinations(index, reqSum - arr[index], ds, arr, result);
        ds.pop();

    }
    // reqSum += arr[index];
    combinations(index + 1, reqSum, ds, arr,result);
}

combinationSum([10, 1, 2, 7, 6, 1, 5], 8);