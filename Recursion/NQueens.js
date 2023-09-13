var solveNQueens = function (n) {
  const nQueens = new Array(n).fill(null).map(() => Array(n).fill("."));
  let priDiagonal = {};
  let secDiagonal = {};
  let result = [];
    findingCombinations(0, nQueens, priDiagonal, secDiagonal, result);
    console.log(result);
  return result;
};

function findingCombinations(row, nQueens, priDiagonal, secDiagonal, result) {
    if (row === nQueens.length) {
    //   console.log(nQueens);
    result.push(convertArrToStr(nQueens));
    return;
  }
  for (let col = 0; col < nQueens.length; col++) {
    if (isValid(priDiagonal, secDiagonal, row, col, nQueens)) {
      priDiagonal[col - row + nQueens.length] = true;
      secDiagonal[col + row] = true;
      nQueens[row][col] = "Q";
      findingCombinations(row + 1, nQueens, priDiagonal, secDiagonal, result);
      priDiagonal[col - row + nQueens.length] = false;
      secDiagonal[col + row] = false;
      nQueens[row][col] = ".";
    }
  }
}

function isValid(priDiagonal, secDiagonal, row, col, nQueens) {
  for (let i = 0; i < nQueens.length; i++) {
    if (nQueens[i][col] === "Q") {
      return false;
    }
  }
  if (priDiagonal[col - row + nQueens.length]) {
    return false;
  }
  if (secDiagonal[col + row]) {
    return false;
  }
  return true;
}

function convertArrToStr(nQueens) {
    let newArr = [];
    for (let i = 0; i < nQueens.length; i++){
        newArr.push(nQueens[i].join(""));
    }
    return newArr
}

// console.log(solveNQueens(4));
solveNQueens(4)