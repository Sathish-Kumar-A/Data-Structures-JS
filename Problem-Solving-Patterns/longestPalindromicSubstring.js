// Longest palindromic substring

function longestPalindromicSubString(string) {
    resultString = "";
    for (let i = 0; i < string.length; i++){
        let left = i;
        let right = i;
        subString(left, right, string);
        subString(left, right + 1, string);
        
    }
    return resultString;
}
function subString(left, right,string) {
    while (left >= 0 && string[left] == string[right] && right <= string.length) {
        if (resultString.length < (right - left) + 1) {
            resultString = string.slice(left, right + 1);
        }
        left -= 1;
        right += 1;
    }
}

console.log(longestPalindromicSubString("ccc"));