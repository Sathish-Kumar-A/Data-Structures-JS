const sort = (array) => {
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[i] < array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            else {
                continue;
            }
        }
    }
    return array;
}


const bubbleSort = (array) => {
    var swaps;
    for (let i = 0; i < array.length; i++){
        swaps=false
        for (let j = 0; j < array.length - i - 1; j++){
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swaps = true;
            }
            else {
                continue;
            }
        }
        if (!swaps) break;
        console.log("pass")
    }
    // console.log(array)
    return array;
}

console.log(bubbleSort([1,2,3,5,4]));