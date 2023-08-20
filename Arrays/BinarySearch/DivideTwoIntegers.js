/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === 0 || divisor === 0) return 0;
  if (dividend === 1 << 31 && divisor === -1) {
    return 2147483647;
  }
  let sign = dividend >= 0 == divisor >= 0;
  let dd = Math.abs(dividend);
  let di = Math.abs(divisor);
  let result = 0;
  while (dd - di >= 0) {
    let temp = 0;
      while (dd - Math.abs(di << 1 << temp) > 0) {
        console.log(dd, (di << 1) << temp, temp, dd - ((di << 1) << temp));
        temp++;
      }
    result += 1 << temp;
      dd -= di << temp;
      console.log(dd);
  }
  return sign ? result : -result;
};


console.log(divide(2147483647, 3));