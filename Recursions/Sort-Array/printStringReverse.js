const printStringReverse = (str, index) => {
  if (index < 0) {
    return;
  }
  process.stdout.write(str.charAt(index));
  printStringReverse(str, index - 1);
};

const myStr = "hello world";
printStringReverse(myStr, myStr.length - 1);
