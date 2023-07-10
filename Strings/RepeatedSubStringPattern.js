/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let obj = {};
    for (let i = 0; i < s.length; i++){
        if (!obj[i]) {
            obj[s[i]] = true;
        }
    }
    let subStrRequired = Object.keys(obj).join("");
    if (((s.length % subStrRequired.length)===0) && (s.length/subStrRequired.length>1)) {
        return strStr(s, subStrRequired);
    }
    return false;
    // console.log(subStrRequired);


};

var strStr = function (haystack, needle) {
//   if (needle.length > haystack.length) {
//     return -1;
//   }
  // * Sliding Window technique
  let i = 0;
  let j = needle.length;
  while (j <= haystack.length) {
    if (haystack.slice(i, j) === needle) {
      return true;
    } else {
      i++;
      j++;
    }
  }
  return false;
};

// console.log(repeatedSubstringPattern("a"));