const findFactorial = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  }

  let factOfNMinusOne = findFactorial(n - 1);
  let factOfN = n * factOfNMinusOne;
  return factOfN;
};

console.log(findFactorial(5));
