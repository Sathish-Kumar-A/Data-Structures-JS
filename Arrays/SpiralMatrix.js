/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let i = 0;
  let j = 0;
  let count = 1;
  let run = true;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([...Array(n).fill(0)]);
  }
  // console.log(arr);
  let left = 0;
  let top = 0;
  let right = n-1;
  let bottom = n-1;
  let mode = "right";
    while (run) {
    arr[i][j] = count;
        if (mode === "right") {
            if (j === right) {
                mode = "down"
                top++;
            }
            else {
              j++;
              count++;
            }
        }
        else if (mode === "down") {
            if (i === bottom) {
                mode = "left";
                right--;
            }
            else{
                i++;
                count++;
            }
        }
        else if (mode === "left") {
            if (j === left) {
                mode = "top";
                bottom--;
            }
            else {
                j--;
                count++;
            }
        }
        else {
            if (i === top) {
                mode = "right";
                left++;
            }
            else {
                i--;
                count++;
            }
        }
   
    if (count === n * n + 1) {
      run = false;
    }
  }
  return arr;
};

// console.log(generateMatrix(5));