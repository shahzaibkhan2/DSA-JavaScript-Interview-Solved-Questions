const sumOfDigits = (num) => {
  let arr = Array.from(String(num), Number);
  return arr.reduce((accum, curElem) => (accum += curElem));
};

const example = sumOfDigits(123456);
const example2 = sumOfDigits(4);

console.log(`Sum of example one is ${example} & example two is ${example2}`);
