/**
 * @param {number[][]} mat
 * @return {number}
 */

// * leetcode 

// ? Two Loop Approach
// var diagonalSum = function (mat) {
//     let sum = 0;
//     for (let i = 0; i < mat.length; i++){
//         for (let j = 0; j < mat.length; j++){
//             if ((i === j) || (i+j===mat.length-1)) {
//                 // console.log(mat[i][j],`${i}`+j);
//                 sum+=mat[i][j]
//             }
//             else {
//                 continue;
//             }
//         }
//     }
//     return sum;
// };

// ? Optimized Approach

var diagonalSum = function (mat) {
  let sum = 0;
    for (let i = 0; i < mat.length; i++) {
        // primary diagonal sum
        sum += mat[i][i];
        // secondary diagonal sum
        sum += mat[i][mat.length - 1 - i];
        
    }
    // In case of odd matrix, removing the center sum, since it already got added in the primary diagonal sum
    if (mat.length % 2 === 1) {
      sum -= mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)];
    }
  return sum;
};

console.log(diagonalSum([[5]]));
