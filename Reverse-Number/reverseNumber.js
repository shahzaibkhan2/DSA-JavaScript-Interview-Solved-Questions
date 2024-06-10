// DSA Approach

const reverseNumber = (num) => {
  let reversed = 0;
  while (num > 0) {
    let lastValue = num % 10;
    reversed = reversed * 10 + lastValue;
    num = Math.floor(num / 10);
  }

  return reversed;
};

console.log(reverseNumber(123456789));

// Built-in JavaScript methods approach

const reverseNumberBuiltIn = (num) => {
  return Number(num.toString().split("").reverse().join(""));
};

console.log(reverseNumberBuiltIn(123456789));
