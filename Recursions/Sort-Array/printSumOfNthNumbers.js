const printSum = (i, n, sum) => {
  if (i > n) {
    console.log(sum);
    return;
  }

  sum += i;
  printSum(i + 1, n, sum);
};

printSum(1, 5, 0);
