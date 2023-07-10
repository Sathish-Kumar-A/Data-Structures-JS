/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length > haystack.length) {
        return -1;
    }
    // * Sliding Window technique
    let i = 0;
    let j = needle.length;
    while (j <= haystack.length) {
        // console.log(haystack.slice(i, j));
        if (haystack.slice(i, j) === needle) {
            return i;
        }
        else {
            i++;
            j++;
        }
    }
    return -1;

    // // * Count based check
    // let count = 0;
    // let i = 0;
    // while (i < haystack.length) {
    //     // if(count==)
    //     if (haystack[i] === needle[count]) {
    //         count++;
    //     }
    //     else {
    //         count = 0;
    //     }
    //     if (count === needle.length) {
    //         // console.log(i);
    //         return i - (needle.length-1);
    //     }
    //     i++;
    // }
    // return -1;
    
};

// export default strStr;

console.log(strStr("mississippi", "issip"));


// console.log("sathish".slice(1, 3).join(""));