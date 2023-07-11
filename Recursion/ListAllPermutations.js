/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];
    permutations(0, [], nums, result);
    return result;
};


function permutations(index, ds, arr, result) {
    ds.push(arr[index])
    if (ds.length === arr.length) {
        result.push([...ds]);
        // ds=[]
    }
    if (index >= arr.length) {
        // ds=[]
        return
    }
    for (let i = 0; i < arr.length; i++){
        if (i == index) continue;
        if (ds.length >= arr.length) break;
        // ds.push(arr[i])
        permutations(i+1, ds,arr,result);
        // ds.pop();
    }
}

console.log(permute([1,2,3]));