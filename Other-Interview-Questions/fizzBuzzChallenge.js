const fizzBuzzChallenge = (startNum, endNum) => {
  let arr = [];
  for (let num = startNum; num <= endNum; num++) {
    if (num % 3 === 0 && num % 5 === 0) arr.push("FizzBuzz");
    else if (num % 3 === 0) arr.push("Fizz");
    else if (num % 5 === 0) arr.push("Buzz");
    else arr.push(num);
  }

  return arr;
};

console.log(fizzBuzzChallenge(3, 23));
