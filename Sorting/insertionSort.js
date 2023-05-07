const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++){
        let currentVar = array[i];
        for (var j = i-1; j >=0  && array[j]>currentVar; j--){
            array[j + 1] = array[j];
        }
        array[j + 1] = currentVar;
    }
    return array;
}

console.log(insertionSort([1, 3, 4, 5, 12, 0]));
