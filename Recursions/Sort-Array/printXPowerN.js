const printXpowerN = (x, n) => {
  if (n === 0) {
    return 1;
  }
  if (x === 0) {
    return 0;
  }

  let xPowerNminusOne = printXpowerN(x, n - 1);
  let result = x * xPowerNminusOne;
  return result;
};

const example = printXpowerN(5, 3);
console.log(example);
