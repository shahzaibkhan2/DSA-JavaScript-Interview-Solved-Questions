const sumOfSquares = (arr) => {
  return arr.reduce((accum, currVal) => (accum = accum + currVal * currVal));
};

const example = sumOfSquares([1, 2, 3]);
const example2 = sumOfSquares([2, 3, 6]);

console.log(example, example2);
