function medianOfSortedArrays(array1, array2) {
    let i = 0;
    let j = 0;
    let n = array1.length;
    let m = array2.length;
    let resultArray = [];
    while (i < n && j < m) {
        if (array1[i] <= array2[j]) {
            resultArray.push(array1[i]);
            i += 1;
        }
        else {
            resultArray.push(array2[j]);
            j += 1;
        }
    }
    if (i < array1.length) {
        resultArray = [...resultArray, ...array1.slice(i)]
    }
    if (j < array2.length) {
     resultArray = [...resultArray, ...array2.slice(j)]
    }
    let index = resultArray.length / 2;
    if (resultArray.length % 2 === 0) {   
        return (resultArray[index - 1] + resultArray[index]) / 2;
    }
    else {
        return resultArray[Math.ceil(index)-1];
    }
}
console.log(medianOfSortedArrays([1,2], [3,4]));