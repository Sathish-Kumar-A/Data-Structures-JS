/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (original.length > m * n) {
    return [];
  }
  let rows = original.length / n;

  let twoDArr = Array(rows).fill().map(u=>[]);
  console.log(rows, twoDArr);

  let i=0;
  let j=0;
  while(i<rows){
      twoDArr[i].push(original[j]);
      j++;
      if(j===(i+1)*n){
          i++;
      }
  }
  return twoDArr;
};

console.log(construct2DArray([1, 2, 3], 1,3));
