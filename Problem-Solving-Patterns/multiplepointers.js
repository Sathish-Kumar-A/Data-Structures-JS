const countUniqueValues = (array) => {
    let i = 0;
    let j = 1;
    if (array.length === 1) {
        return 1;
    }
    while (i<array.length && j<array.length) {
        if (array[i] !== array[j]) {
            array[i+1] = array[j];
            i++;
        }
        else {
            j++
        }
    }
    return i+1;
}
console.log(countUniqueValues([1, 2, 2, 2, 3, 4, 5, 5,6,7,9,10,10]));