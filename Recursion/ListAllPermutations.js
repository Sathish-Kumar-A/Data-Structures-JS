/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  // Method one ()// * two Memory ds were used,
    // nums.sort((a, b) => a - b);
    console.log(nums);
    // permutations([], nums, result, {});

    // Method Two() //* Optimized swap 
    optimizedSwapPermutation(0,nums, result);
    
  return result;
};

// * two Memory ds were used,

function permutations(ds, arr, result,map) {
    if (ds.length === arr.length) {
        result.push([...ds]);
        return
        // ds=[]
    }
    // if (index >= arr.length) {
    //     // ds=[]
    //     return
    // }
    for (let i = 0; i < arr.length; i++){
        // if (i == index) continue;
        if (i > 0 && (arr[i] === arr[i - 1])) continue;
        if (!map[i]) {
            ds.push(arr[i]);
            map[i] = true;
            permutations(ds, arr, result, map);
            ds.pop();
            delete map[i];
        }
        // if (ds.length >= arr.length) break;
        // ds.push(arr[i])
        // ds.pop();
    }
}

// * optimized solution (if leetcode order not matters)

function optimizedSwapPermutation(index, arr,result) {
    if (index === arr.length) {
        result.push([...arr]);
        return
    }
    for (let i = index; i < arr.length; i++){
        if (i > index && (arr[i] === arr[i - 1])) continue;
        [arr[index], arr[i]] = [arr[i], arr[index]];
        optimizedSwapPermutation(index + 1, arr, result);
        [arr[index], arr[i]] = [arr[i], arr[index]];
    }
}

console.log(permute([1,2,3]));