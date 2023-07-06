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
    if (arr[index] === reqSum) {
        // console.log([...ds, arr[index]]);
        result.push([...ds, arr[index]]);
        return
    }
    if ((index >= arr.length) || arr[index] > reqSum) {
        return;
    }
    reqSum -= arr[index];
    ds.push(arr[index]);
    combinations(index, reqSum, ds, arr,result);
    ds.pop();
    reqSum += arr[index];
    combinations(index + 1, reqSum, ds, arr,result);
}

combinationSum([8, 7, 4, 3], 11);