// binary search is a part of divide and conquer method;
const binarySearch = (array, val) => {
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        let currentElement = Math.floor((min + max) / 2);
        if (array[currentElement] < val) {
            min = currentElement + 1;
        }
        else if (array[currentElement] > val) {
            max = currentElement - 1;
        }
        else {
            return currentElement;
        }

    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));