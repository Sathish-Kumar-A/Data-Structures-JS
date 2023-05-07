const pivot = (arr, start, end) => {
    let swapIndex = start;
    let initialPivot = arr[start];
    for (let i = start + 1; i <= end; i++){
        if (initialPivot > arr[i]) {
            swapIndex++;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
    return swapIndex;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left sort
        quickSort(arr, left, pivotIndex - 1);
        // right sort
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}


console.log(quickSort([3, 4, 5, 12, 1, 0]));