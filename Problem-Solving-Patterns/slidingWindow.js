// Maximum sum of subarrays in a array;

const slidingWindow = (array, num) => {
    let tempSum = 0;
    let maxSum = 0;
    for (let i = 0; i < num; i++){
        maxSum += array[i];
    }
    tempSum = maxSum;
    for (let i = num; i < array.length; i++){
        tempSum = tempSum - array[i - num] + array[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
console.log(slidingWindow([1, 9, 9, 4, 5, 6, 7, 8], 2));