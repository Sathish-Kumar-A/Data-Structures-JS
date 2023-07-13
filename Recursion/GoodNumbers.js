/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
//   let count = 1;
  let ans=findingGoodNumbers(0, 1, n);
  console.log(ans);
  return BigInt(ans);
};

function findingGoodNumbers(index, count, n) {
    // console.log(index%2);
    if (index >= n) {
    //   console.log(count);
    return count;
  }
  if (index % 2 === 0) {
    count *= 5;
  } else {
    count *= 4;
  }
  return findingGoodNumbers(index + 1, count, n);
}

countGoodNumbers(50)