const printFib = (a, b, n) => {
  if (n === 0) {
    return;
  }
  let c = a + b;
  console.log(c);
  printFib(b, c, n - 1);
};
let a = 0;
let b = 1;
console.log(a);
console.log(b);
printFib(a, b, 7 - 2);
