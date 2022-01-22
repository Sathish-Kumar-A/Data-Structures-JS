// Program to check if two words are anagrams

const frequencyCounter = (string1, string2) => {
    if (string1.length !== string2.length) {
        return false;
    }
    let object1 = {};
    let object2 = {};
    for (let i = 0; i < string1.length; i++){
        object1[string1[i]] = object1[string1[i]] + 1 || 1;
    }
    for (let i = 0; i < string2.length; i++) {
        object2[string2[i]] = object2[string2[i]] + 1 || 1;
    }
    // console.log(object1, object2);
    for (let key in object1) {
        if (object2[key] !== object1[key]) {
            return false;
        }
    }
    return true;
}

console.log(frequencyCounter("sathish", "ssihtsa"));