/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let column = matrix[0].length - 1;
  let row = matrix.length - 1;

  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][0] > target) {
      return false;
    }
    if (matrix[0][i] > target) {
      column = i - 1;
      break;
    }
    if (i < matrix.length && matrix[i][0] > target) {
      row = i - 1;
      break;
    }
  }
  console.log(column, row);
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][column] === target) {
      return true;
    }
  }
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[row][i] === target) {
      return true;
    }
  }
  return false;
};
