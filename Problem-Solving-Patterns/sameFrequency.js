function sameFrequency(num1, num2) {
    let number1 = num1.toString();
    let number2 = num2.toString();
    let obj1 = {};
    let obj2 = {};
    if (number1.length !== number2.length) {
        return false;
    }
    for (let i = 0; i < number1.length; i++){
        obj1[number1[i]] = obj1[number1[i]] + 1 || 1;
        obj2[number2[i]] = obj2[number2[i]] + 1 || 1;
    }
    for (let keys in obj1) {
        if (obj1[keys] !== obj2[keys]) {
            return false;
        }
    }
    return true;
    // console.log(number1+number2);
}

console.log(sameFrequency(897, 698));