const printXpowerNLognHeight = (x, n) => {
  if (n === 0) {
    return 1;
  }

  if (x === 0) {
    return 0;
  }

  const halfPower =
    printXpowerNLognHeight(x, Math.floor(n / 2)) *
    printXpowerNLognHeight(x, Math.floor(n / 2));

  if (n % 2 === 0) {
    return halfPower;
  } else {
    return halfPower * x;
  }
};

const result = printXpowerNLognHeight(5, 3);
console.log(result);
