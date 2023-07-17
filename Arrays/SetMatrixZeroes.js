/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// * Leetcode 73
var setZeroes = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let rowPositions = Array(m).fill(-1);
    let columnPositions = Array(n).fill(-1);
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (matrix[i][j] === 0) {
              rowPositions[i] = 0;
              columnPositions[j] = 0;
        }
      }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if ((rowPositions[i]===0) || (columnPositions[j]===0)) {
              matrix[i][j] = 0;
        }
      }
    }

    return matrix;
};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
