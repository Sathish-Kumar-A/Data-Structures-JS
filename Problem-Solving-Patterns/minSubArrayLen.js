function minSubArrayLen(arr, total) {
    let count = 0
    let minimum = 0;
    let i = 0
    let j = 0
    
    while (i < arr.length) {
        if (count < total && j < arr.length) {
            count += arr[j];
            j++;
        }
        else if (count >= total) {
            minimum = Math.min(minimum, j - i);
            count -= arr[i];
            i++;
        }
        else {
            break;
        }
    }
    return minimum==Infinity ? 0:minimum;

}
console.log(minSubArrayLen([2,3,1,2,4,3],7))
