const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++){
        let minIndex = i;
        let swaps = false;
        for (let j = i+1; j < array.length; j++){
            if (array[j] < array[minIndex]) {
                minIndex = j;
                swaps = true;
            }
        }
        if (swaps) {
            [array[i],array[minIndex]] = [array[minIndex],array[i]];
        }
    }
    return array;
}

console.log(selectionSort([2, 1, 3, 5, 6]));
