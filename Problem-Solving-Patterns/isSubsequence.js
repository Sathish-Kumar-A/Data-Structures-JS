function isSubsequence(string1,string2) {
    let i = 0;
    let j = 0;
    if (string2.length < string1.length) {
        return false;
    }
    while (i < string1.length && j < string2.length) {
        if (string1[i] == string2[j]) {
            i++;
        }
        if (i == string1.length) {
            return true;
        }
        j++;
    }
    return false;
    
}

console.log(isSubsequence("abc","acb"));