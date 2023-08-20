function sumXor(n) {
  let zeroes = 0;
  let bitStr = n.toString(2);
  for (let i = 0; i < bitStr.length; i++) {
    if (bitStr[i] === "0") {
      zeroes++;
    }
  }
  if (n === 0) {
    zeroes = 0;
  }
  return 2 ** zeroes;
}
