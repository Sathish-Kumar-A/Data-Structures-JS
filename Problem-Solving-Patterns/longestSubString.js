// Longest substring without repeating

function longestSubstring(string) {
    let max = -Infinity;
    let i = 0;
    let j = 1;
    if (string.length == 1) {
        return 1;
    }
    while (j < string.length) {
        if (string.slice(i, j).includes(string[j])) {
            max = Math.max(max, j - i);
            i+=1;
        }
        else {
            j += 1;
        }
    }
    max = Math.max(max, j-i);
    return max;
    
}

console.log(longestSubstring("pwwkew"));

// let string="sathish"
// console.log(string.slice(0,5));