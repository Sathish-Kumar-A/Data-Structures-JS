function averagePair(arr, average) {
    let i = 0;
    let j = arr.length - 1;
    if (!arr.length) {
        return false;
    }
    if (arr.length == 1 && arr[0]==average) {
        return true;
    }
    while (i < j) {
        if ((arr[i] + arr[j]) / 2 == average) {
            return true;
        }
        if ((arr[i] + arr[j]) / 2 < average) {
            i++;
        }
        else {
            j--;
        }
    }
    return false;
}

console.log(averagePair([-1,0,3,4,5,6],4.1));