const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10 , i)) % 10
}

const getDigitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const getMaxDigitLength = (arr) => {
    maxDigits = 0;
    for (let i = 0; i < arr.length; i++){
        let digitCount = getDigitCount(arr[i]);
        if (maxDigits < digitCount) {
            maxDigits = digitCount;
        }
    }
    return maxDigits;
}


const radixSort = (arr) => {
    let maxDigitCount = getMaxDigitLength(arr);
    let result = [];
    for (let i = 0; i < maxDigitCount; i++){
        let bucket = Array.from({ length: 10 }, () => []);
        for (let k = 0; k < arr.length; k++){
            let digit = getDigit(arr[k], i);
            // console.log(digit);
            bucket[digit].push(arr[k]);
        }
        arr = [].concat(...bucket);
    }
    // console.log(bucket)
    return arr;
}
// console.log(getDigit(117, 2))
console.log(radixSort([123, 45, 8790, 697644, -534689]))

// console.log(getDigitCount(1000))