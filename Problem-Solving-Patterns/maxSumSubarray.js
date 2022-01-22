function maxSumSubArray(arr, limit) {
    let i = 0;
    let j = 0;
    let max = -Infinity;
    let count = 0;
    if (limit > arr.length) {
        return null;
    }
    while (j < arr.length) {
        count += arr[j];
        if (j - i == limit - 1) {
            max = Math.max(count, max);
            count -= arr[i];
            i++;
        }
        j++;
    }
    return max;
} 
console.log(maxSumSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));