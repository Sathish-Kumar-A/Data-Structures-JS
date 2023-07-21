/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let obj = {};
  for (let i = 0; i < board.length; i++) {
    let row = "row" + i;
    for (let j = 0; j < board.length; j++) {
      
      if (!obj.hasOwnProperty(i) || !obj[i].hasOwnProperty(j)) {
        if (!(`${i}` in obj)) {
          obj[i] = {};
        } else {
          obj[i][j] = true;
        }
      } else {
        return false;
      }
    }
  }
  console.log(obj);
  return true;
};


console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);