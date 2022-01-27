var isPalindrome = function (x) {
    x = x.toString();
    let str = "";
    for (let i = x.length-1; i >=0; i--){
        str += x[i];
    }
    if (x == str) {
        return true;
    }
    else {
        return false;
    }
};

console.log(isPalindrome(121))